# 山口研究室HP(VuePress)

![logo](https://user-images.githubusercontent.com/36836040/80109371-600a8400-85b8-11ea-91f0-30583ce557f1.png)

## 前提環境

- node.js v10 以上
- npm 6.9.0 以上

## 環境構築

必要パッケージをインストール

```bash
npm install
```

## 開発サーバ起動

```bash
npm run docs:dev
```

http://localhost:8080 で起動するのでブラウザで開く

## ページの編集

`/docs` 内の `.md` ファイルを編集する

## その他カスタマイズする場合

公式ドキュメント参照

https://vuepress.vuejs.org/

## ビルドと本番デプロイ

ビルドを行うことで`docs/.vuepress/dist`下にHTML, JS, CSSを生成する

これら生成物を本番環境Webサーバに配置することで本番デプロイとなる

```bash
npm run docs:build
```
