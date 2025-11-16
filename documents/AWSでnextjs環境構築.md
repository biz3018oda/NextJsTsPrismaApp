# AWS で nextjs 環境構築

## ディレクトリ構成

```
project-root/
│
├── README.md
│
├── docker/
│   ├── docker-compose.dev.yml       ← 開発用 compose
│   ├── docker-compose.prod.yml      ← 本番用 compose
│   └── Dockerfile                   ← Next.js（共通）
│
├── nextjsapp/                       ← Next.js プロジェクト本体（あなたの src がここに入る）
│   ├── package.json
│   ├── next.config.mjs
│   ├── src/
│   ├── public/
│   ├── tsconfig.json
│   └── ...その他 Next.js のフォルダ
│
├── env/
│   ├── .env.development
│   └── .env.production
│
└── postgres/
    └── data/                        ← 本番DBの永続化用

```

## 開発と本番のビルド

### 開発

- ビルド

```
cd docker
docker-compose -f docker-compose.dev.yml up --build
```

### 本番

```
cd /var/www/nextjsapp/docker
docker-compose -f docker-compose.prod.yml up -d --build
```

## ローカルの prisma

- ログイン

```

docker % docker exec -it nextjs_dev /bin/sh
/workspace/nextjsapp #
/workspace/nextjsapp # cd prisma
/workspace/nextjsapp # npx prisma studio
```

## DB 構築

```

CREATE DATABASE mydatabase;
CREATE USER 'root'@'localhost' IDENTIFIED BY 'rootpw';
GRANT ALL PRIVILEGES ON mydatabase.\* TO 'root'@'localhost';
FLUSH PRIVILEGES;
EXIT;

```

```

```
