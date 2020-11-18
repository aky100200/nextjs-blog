# nextjs-blog

Next.js で作成したブログサービス

## 環境構築手順

開発環境構築手順を以下に記載します。  
開発は VSCode を使用します。コードフォーマッター等の拡張機能も必要になりますので合わせるようにしてください。

### 前提

- VSCode のインストールが終わっていること
- Docker 環境があること
- Docker が起動していること

### 手順

1. `docker-compose up` を実行
2. Chrome 等の Web ブラウザで `http://localhost:3000` にアクセスして画面が表示されれば OK

## 使用している技術

- Next.js(TypeScript)
- Jest

## 貢献手順

1. Issue を選び、main リポジトリから feature ブランチを発行してください。
2. feature ブランチは「feature/{ユーザー名}/#{Issue 番号}」で命名してください。
3. 開発には、VSCode を使用します。
   VScode を開くと、推奨の拡張機能をインストールするようにダイアログが出ると思いますのでインストールをお願いします。
4. 機能開発、修正を行います。`__tests__` ディレクトリに、テストコードの実装、修正もお願いします。
5. コミットする前に以下を行い、Lint、テストが正常に動作することを確認してください。
   `npm run lint`
   `npm run test`
   ※プルリクエスト時に同様のチェックを実施しているので必ず実施してください。
6. Lint とテストの動作が保証できるようになったらコミットおよび Push をお願いします。コミットメッセージは以下のルールでお願いします。
   `ex. #{Issue 番号} コミット内容`
7. Push できたら GitHub で main にマージするようプルリクエストを発行してください。
   タイトル、内容はレビュアーが何を見ればよいか分かるように記載をお願いします。
8. 指摘があれば修正対応をお願いします。
9. マージされた場合は、Reviewers が Issue 内容を最終チェックし閉じるようにします。
10. マージされると本番環境にデプロイされます。

## デプロイ環境

以下のサイトにデプロイされます。  
環境は、Vercel というサービスを使用しています。

https://nextjs-blog-sigma-red.vercel.app/

## CI/CD

「GitHub Actions」を使用しています。  
使用方法はここでは記載しませんが、`.github`ディレクトリ以下の`main.yml`に実施内容を記載しています。

## Docker

`docker-compose.yml`、`Dockerfile`で管理しています。

## コードフォーマッター

保存時にフォーマットが実行されるように設定しています。  
以下の拡張機能を入れることで実現しています。  
プロジェクトを開いた際に推奨されるはずですが、インストールしなかった場合は個別にインストールをお願いします。

- [Prettier - Code formatter - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## 参考

- This is a starter template for [Learn Next.js](https://nextjs.org/learn).
- [Getting Started | Next.js](https://nextjs.org/docs/getting-started)
