# ベースイメージとして node を使用
FROM node:18.18.2-alpine

WORKDIR /workspace/nextjsapp

# パッケージ定義ファイルをコンテナ内にコピー
#COPY nextjsapp/package*.json ./

#RUN npm install

# アプリケーションの全ファイルをコンテナにコピー
#COPY nextjsapp/ .

#下記はappがなければいけないCouldn't find any `pages` or `app` directory. Please create one under the project root]
#RUN npm run build

# アプリが使うポートを開放 ----
EXPOSE 3000

# 開発サーバーを起動
CMD ["npm", "run", "dev"]
