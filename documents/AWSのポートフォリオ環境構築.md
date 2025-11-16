# WordPress を削除してポートフォリオ HTML1 枚だけにする手順

## 1. WordPress 削除

### 1-1 ファイル削除

```
sudo rm -rf /var/www/wordpress
```

### 1-2 データベース削除 (MySQL / MariaDB)

```
sudo mysql -u root -p

SHOW DATABASES;
-- WordPressのDB名を確認（例: wordpress）
DROP DATABASE wordpress;
EXIT;
```

## 2. Nginx サーバーブロック設定

### 2-1 サーバーブロック作成

```
sudo nano /etc/nginx/sites-available/portfolio

server {
    listen 80;
    server_name sample.com www.sample.com;

    root /var/www/portfolio;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }
}

```

### 2-2 サーバーブロック有効化

```
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # 必要なら旧default削除

```

## 3. ディレクトリ準備と権限

```
sudo mkdir -p /var/www/portfolio
sudo chown -R www-data:www-data /var/www/portfolio
sudo chmod -R 755 /var/www/portfolio

sudo touch /var/www/portfolio/index.html
```

## 4. Nginx 設定テスト & リロード

```
sudo nginx -t
sudo systemctl reload nginx

```

## 5. ブラウザで確認

```
http://sample.com
```

## Certbot インストール（Ubuntu の場合）

```
sudo apt update
sudo apt install certbot python3-certbot-nginx -y

```

## Nginx サーバーブロック設定確認

```
sudo nano /etc/nginx/sites-available/portfolio

```

## HTTPS 証明書の取得と自動設定

```
sudo certbot --nginx -d sample.com -d www.sample.com

```

2 を押して Enter

```
What would you like to do?
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 1: Attempt to reinstall this existing certificate
 2: Renew & replace the certificate (may be subject to CA rate limits)
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 Select the appropriate number [1-2] then [enter] (press 'c' to cancel)
```

## 証明書更新の確認

```
sudo systemctl status certbot.timer

```

## Nginx 設定確認 & リロード

```
sudo nginx -t
sudo systemctl reload nginx

```

## 5. ブラウザで確認

```
https://sample.com
```
