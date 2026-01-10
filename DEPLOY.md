# Cloudflare Pages へのデプロイガイド

かも鯖公式サイトを Cloudflare Pages にデプロイする手順は以下の通りです。

### 1. リポジトリの準備
GitHub などの Git ホスティングサービスに現在のコードをアップロード（Push）してください。

### 2. Cloudflare Pages でプロジェクト作成
1. Cloudflare ダッシュボードにログインし、「Workers & Pages」を選択します。
2. 「Create application」→「Pages」→「Connect to Git」をクリックします。
3. リポジトリを選択します。

### 3. ビルド設定
以下の設定を入力して、「Save and Deploy」をクリックします。

- **Framework preset**: `Next.js` (または `None`)
- **Build command**: `npm run build`
- **Build output directory**: `out`

---

### 注意事項
- このプロジェクトは **Static Export (SSG)** モードで動作するように設定されています。
- `next.config.ts` で `output: 'export'` が設定されているため、ビルド時にすべてのページが静的なHTMLとして生成されます。
- 画像は `public` フォルダから配信され、画像最適化機能はオフ（unoptimized）に設定されています（静的デプロイメントの制約のため）。

### 更新の反映
GitHub にコードを Push すれば、Cloudflare Pages が自動的にビルドとデプロイを行います。ニュース記事（`.md` ファイル）を追加した場合も同様です。
