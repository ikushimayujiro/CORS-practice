# 概要

CORSの実装をしてみます。

## 構成

api/配下にバックエンド、front/配下にフロントエンドを実装しています。
それぞれ別でnpm管理しています。

### アプリケーション起動

#### バックエンド

1. api/配下に移動：`cd api`
1. `node app.js`を実行
1. [localhost:3000](localhost:3000)でアクセス

#### フロントエンド

1. front/配下に移動：`cd front`
1. `http-server`を実行（-p オプションでポート番号指定可能：`http-server -p 8888`）
1. [localhost:8080](localhost:8080)でアクセス
