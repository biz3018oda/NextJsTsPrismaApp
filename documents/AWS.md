# AWS 環境構築

## 全体の順番

```
✅ EC2インスタンス起動（Ubuntuなど）
✅ Elastic IP をアタッチ（固定IP）
✅ Nginx インストール・初期設定
✅ PHP, PHP-FPM, 必要な拡張をインストール
✅ MariaDBインストール & DB作成
✅ WordPressファイルを配置
✅ ドメインをRoute 53で設定（Aレコード → Elastic IP）
✅ Nginx の server ブロックで WordPress設定
✅ WordPressにアクセスして動作確認（まだHTTPでOK）
✅ CertbotでSSL証明書を取得 & HTTPS化
✅ HTTP→HTTPSのリダイレクト設定（自動 or 手動）
```

## login

### コマンド

- パブリック DNS 名を使用する場合.

```
ssh -i /path/key-pair-name.pem instance-user-name@instance-public-dns-name
```

- 実際.

```
ssh -i "XXXXX.pem" ubuntu@ecXX-XX-XXX-XXX.ap-southeast-2.compute.amazonaws.com
```

### config

- 構成.

```
Host bastion              # 設定の名前
	Hostname 3.112.XXX.69   # サーバーのIPアドレス
	User ec2-user           # ログインユーザー名
	IdentityFile ~/.ssh/aws-keypair.pem # 秘密鍵ファイルのパス
```

- 実際.

```
Host aws-ec2
	Hostname ecXX-XX-XXX-XXX.ap-southeast-2.compute.amazonaws.com
	User ubuntu
	IdentityFile ~/.ssh/XXXXX.pem
```

- コマンド

```
.ssh % ssh aws-ec2
```

## Nginx 環境構築

### install

```
$ pwd
/home/ubuntu

$ sudo apt update
$ sudo apt upgrade -y

$ sudo apt install -y nginx

$ nginx -v
```

### 起動

```
$ sudo systemctl start nginx
$ sudo systemctl enable nginx

$ sudo systemctl start php8.2-fpm
$ sudo systemctl enable php8.2-fpm
```

### サービスの状態確認

```
$ sudo systemctl status nginx

nginx.service - A high performance web server and a reverse proxy server
    Active: active (running)
```

## PHP 環境構築

### php install

```
$ sudo apt update && sudo apt install -y php
```

### PHP 関連のパッケージ install

- install

```
$ sudo apt install -y php8.3-mysql php8.3-gd php8.3-mbstring php8.3-xml
```

- モジュールの意味

| パッケージ          | 役割                                                                |
| ------------------- | ------------------------------------------------------------------- |
| **php8.3-mysql**    | MariaDB（MySQL）と PHP をつなぐ：必須 🔥                            |
| **php8.3-gd**       | 画像処理：サムネイルや画像のリサイズなどで使用される                |
| **php8.3-mbstring** | マルチバイト文字対応（日本語など）：必須レベル 💡                   |
| **php8.3-xml**      | XML や RSS フィードなどの解析：テーマやプラグインに必要なことが多い |

### PHP-FPM install

```
$ sudo apt install -y php8.3-fpm
$ sudo systemctl start php8.3-fpm
$ sudo systemctl enable php8.3-fpm
```

### PHP-FPM が動いてるかをチェック

```
$ systemctl status php8.3-fpm

php8.3-fpm.service - The PHP 8.3 FastCGI Process Manager
     Loaded: loaded (/usr/lib/systemd/system/php8.3-fpm.service; enabled; preset: enabled)
     Active: active (running) since Mon 2025-10-20 08:14:38 UTC; 38s ago
       Docs: man:php-fpm8.3(8)
    Process: 26987 ExecStartPost=/usr/lib/php/php-fpm-socket-helper install /run/php/php-fpm.sock /etc/php/8.3/fpm/pool.d/www.conf 8>
   Main PID: 26984 (php-fpm8.3)
     Status: "Processes active: 0, idle: 2, Requests: 0, slow: 0, Traffic: 0req/sec"
      Tasks: 3 (limit: 1008)
     Memory: 7.6M (peak: 8.6M)
        CPU: 53ms
     CGroup: /system.slice/php8.3-fpm.service
             ├─26984 "php-fpm: master process (/etc/php/8.3/fpm/php-fpm.conf)"
             ├─26985 "php-fpm: pool www"
             └─26986 "php-fpm: pool www"

```

リスタートの場合

```
$ sudo systemctl restart php8.3-fpm
$ sudo systemctl reload nginx
```

### php 確認

```
$ php -v
PHP 8.3.6 (cli) (built: Jul 14 2025 18:30:55) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.3.6, Copyright (c) Zend Technologies
    with Zend OPcache v8.3.6, Copyright (c), by Zend Technologies
```

## MariaDB 環境構築

### install

```
$ ubuntu@ip-XXX:~$ sudo apt update
$ sudo systemctl enable mariadb
Synchronizing state of mariadb.service with SysV service script with /usr/lib/systemd/systemd-sysv-install.
Executing: /usr/lib/systemd/systemd-sysv-install enable mariadb
```

### MariaDB の起動＆自動起動設定

```
Enter current password for root (enter for none):
→Enter
Switch to unix_socket authentication [Y/n]
→Y


Change the root password? [Y/n]
→n
(unix_socket認証を使うならパスワードは不要)


Remove anonymous users? [Y/n]
→Y
(初期状態で「匿名ユーザー」というログイン名なしのユーザーが存在する。パスワードなしでもデータベースにアクセスできてしまう可能性があるため、セキュリティ上よくない)


Disallow root login remotely? [Y/n]
→Y
(rootユーザーはローカル（localhost）からの接続だけ許可し、ネットワーク（リモート）からの接続は禁止するか？)
By default, MariaDB comes with a database named 'test' that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.


Remove test database and access to it? [Y/n]
→Y
(初期状態で存在する『test』というデータベースと、そのアクセス権限を削除しますか？)


Reload privilege tables now? [Y/n]
→Y
(権限テーブルをリロードして、ここまでの設定変更をすぐに反映しますか？)
```

終了後、下記のように表示される

```
All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```

### login

（unix_socket 認証）.

```
$ sudo mysql
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 41
Server version: 10.11.13-MariaDB-0ubuntu0.24.04.1 Ubuntu 24.04

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]>
```

### DB 確認

```
MariaDB [(none)]> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.002 sec)

MariaDB [(none)]>

```

### db 構築

utf8mb4：絵文字なども含めて、すべての Unicode 文字を正しく保存できる。  
utf8mb4_unicode_ci：Unicode 標準に基づく正確な大文字小文字区別なしの比較・ソートを行う。

```
CREATE DATABASE wordpress_db
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

Query OK, 1 row affected (0.003 sec)

MariaDB [(none)]>

MariaDB [(none)]> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| wordpress_db       |
+--------------------+
5 rows in set (0.000 sec)

```

### WordPress 用ユーザーを作成

```
MariaDB [(none)]> CREATE USER 'wordpress_user'@'localhost' IDENTIFIED BY 'G2cZ|-Kz';
```

### 作成したユーザーに DB のアクセス権を付与

```
MariaDB [(none)]> GRANT ALL PRIVILEGES ON wordpress_db.* TO 'wordpress_user'@'localhost';
```

### 権限を反映

```
MariaDB [(none)]> FLUSH PRIVILEGES;
```

### 作成したユーザーを確認（オプション）

```
MariaDB [(none)]> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.000 sec)

MariaDB [(none)]> SELECT Host, User FROM mysql.user;
+-----------+----------------+
| Host      | User           |
+-----------+----------------+
| localhost | mariadb.sys    |
| localhost | mysql          |
| localhost | root           |
| localhost | wordpress_user |
+-----------+----------------+
4 rows in set (0.001 sec)
```

### MariaDB を終了

```
EXIT;
```

### まとめ

| 設定項目    | 値             | 説明                                 |
| ----------- | -------------- | ------------------------------------ |
| DB_NAME     | wordpress_db   | WordPress 用に作成したデータベース名 |
| DB_USER     | wordpress_user | データベース接続に使用するユーザー名 |
| DB_PASSWORD | XXXXXX         | 上記ユーザーのパスワード             |
| DB_HOST     | localhost      | データベースが動作しているホスト名   |

## Route 53 でドメイン設定

### Elastic IP とは

ElasticIP アドレスとは、固定されたグローバル IP アドレスのことです。この ElasticIP アドレスを EC2 へ割り当てることで、割り当てられているパブリック IP アドレスが変動してしまうことを防ぐことができます。

### ElasticIP を EC2 に割り当てる

EC2 のページの左側の「ネットワーク & セキュリティ」から「Elastic IP」をクリック.  
→ 右上の ElasticIP アドレスを割り当てるをクリック  
→ パブリック IPv4 アドレスプールにチェックされているかを確認が入ってるか確認し、右下の「」をクリック  
→ 右上「アクション」から「Elastic IP アドレスを関連付ける」をクリック  
→ElasticIP 関連付けページで「関連付ける」をクリック

### 接続確認

※「ubuntu」は AWS の AMI によってデフォルトユーザー名が異なる。EC2 が「Ubuntu」なので「ubuntu」になる。

```
$ ssh -i ~/.ssh/XXXXX.pem ubuntu@<割り振られた IPv4 アドレス>
```

## ドメイン取得

お名前ドットコムなどで取得する

## wordpress

### downroad

```
# 1. /var/www ディレクトリに移動
cd /var/www

# 2. wordpressフォルダを作成（なくてもOK、WordPress展開時に作られますが念のため）
sudo mkdir -p wordpress

# 3. WordPressの最新日本語版をダウンロード
sudo wget https://ja.wordpress.org/latest-ja.tar.gz

# 4. ダウンロードしたファイルを展開
sudo tar -xzvf latest-ja.tar.gz

# 5. ダウンロードファイルはもう不要なので削除
sudo rm latest-ja.tar.gz

# 6. 展開すると 'wordpress' フォルダができるので、そのまま使用
# （すでにmkdirで作ってた場合は中身を移動もしくは上書きでOK）

# 7. 所有者をNginxの実行ユーザー（Ubuntuならwww-data）に変更
sudo chown -R www-data:www-data wordpress

# 8. 権限を適切に設定（ディレクトリ755、ファイル644など）
sudo find wordpress/ -type d -exec chmod 755 {} \;
sudo find wordpress/ -type f -exec chmod 644 {} \;

```

### 設定ファイル作成

```
$ cd /var/www/wordpress
$ cp wp-config-sample.php wp-config.php
```

## 設定ファイル

### 補足

Nginx ではサイトの設定ファイルは.  
/etc/nginx/sites-available/ に置いておいて、  
/etc/nginx/sites-enabled/ にシンボリックリンク（ショートカット）を作る.  
という運用が一般的.  
ここで /etc/nginx/sites-enabled/ フォルダの中にある設定ファイルを全部読み込んで、

```
include /etc/nginx/sites-enabled/*;
```

その中に.

```
/etc/nginx/sites-available/wordpress
```

のシンボリックリンクがあれば読み込まれる、という仕組み.

### 設定ファイル作成

```
$ sudo touch /etc/nginx/sites-available/wordpress
```

### 設定ファイル編集

- 編集.

```
$ sudo vi /etc/nginx/sites-available/wordpress
```

- 内容

```
server {
    listen 80;
    server_name example.com www.example.com;  # ここは自分のドメインに置き換えてください。末尾は「;」で！！

    root /var/www/wordpress;
    index index.php index.html index.htm;

    client_max_body_size 100M;

    access_log /var/log/nginx/wordpress_access.log;
    error_log /var/log/nginx/wordpress_error.log;

    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.3-fpm.sock;
    }

    location ~ /\.ht {
        deny all;
    }

    error_page 404 /404.html;
    location = /404.html {
        internal;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        internal;
    }
}
```

編集したら、設定を再確認して再読み込み.

```
$ sudo nginx -t && sudo systemctl reload nginx
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### シンボリック

```
$ sudo ln -s /etc/nginx/sites-available/wordpress /etc/nginx/sites-enabled/
```

### Nginx 設定テスト

```
$ sudo nginx -t
2025/10/20 14:44:01 [warn] 37738#37738: server name "/var/www/wordpress" has suspicious symbols in /etc/nginx/sites-enabled/wordpress:5
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

## サイト確認

### EC2

#### ドメイン取得と設定してない時

```
http:<Elastic IP アドレス>
```

#### ドメイン取得と設定してる時

```

```

### wordpress

#### ドメイン取得と設定してない時

```
http://<Elastic IP アドレス>/wp-admin/
```

#### ドメイン取得と設定してる時

```

```

## github

### install

```
cd /var/www
sudo mkdir nextjsapp
sudo chown ubuntu:ubuntu nextjsapp
cd nextjsapp
ssh -T git@github.com

[ubuntu@ip-XXXX]:/var/www/nextjsapp$ git clone git@github.com:<github-username>/RecruitRegisterReactApp.git .
```

### SSH エージェントを起動して鍵を登録、確認

```
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
ssh-add -l
```

### node install
```
$ curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

$ sudo apt install nodejs -y

$ node -v
v22.21.0

$ npm -v
10.9.4

$ sudo npm install -g npm@latest
```

### 起動
```
npm run build
```
URL
```
http://<EC2のパブリックIP>:3000
```

### インバウンドルール
EC2 > セキュリティグループ > 任意のもの > インバウンドルール  

```
「ルールを追加」

タイプ：カスタムTCP

ポート：3000（Next.js）または4173（Vite）

ソース：0.0.0.0/0
```

## 参考

[SSH クライアントを使用して Linux インスタンスに接続する](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/connect-linux-inst-ssh.html).  
[Wordpress とデータベース（Mysql）の接続方法について](https://note.com/yabu1279/n/n316abf5e32ab).  
[sites-available](https://zenn.dev/funxxfun/articles/d80837d1c7c72f).  
[Elastic IP アドレスの割り当て](https://zenn.dev/kobakichi/articles/assign-elasticip-to-ec2).
