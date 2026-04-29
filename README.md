# 中山プロジェクト 2026

プロジェクト概要と進捗状況を紹介するウェブサイトです。

## 技術スタック

- **フレームワーク**: Next.js 16.2.4
- **言語**: TypeScript 5
- **スタイリング**: Tailwind CSS 4
- **デプロイ**: Vercel
- **パッケージマネージャー**: npm

## プロジェクト構造

```
src/
├── app/           # App Routerの主要なページ
│   ├── page.tsx   # トップページ
│   └── layout.tsx # グローバルレイアウト
├── components/    # 再利用可能なコンポーネント
└── styles/        # グローバルスタイル

public/           # 静的ファイル（画像など）
```

## セットアップ

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### プロダクションビルド

```bash
npm run build
npm start
```

### リンティング

```bash
npm run lint
```

## Vercelへのデプロイ

このプロジェクトはVercelでホストすることを想定しています。

### デプロイ手順

1. [Vercel](https://vercel.com) にサインアップ/ログイン
2. 新規プロジェクトを作成し、GitHubリポジトリを接続
3. `main` ブランチへのプッシュで自動デプロイ

### 環境変数の設定

1. Vercelプロジェクトの設定で環境変数を追加
2. `.env.local.example` を参考に設定

## 開発のガイドライン

- TypeScript型チェックを活用
- ESLintの警告に従う
- Tailwind CSSでスタイリング
- コンポーネントは `src/components/` に配置

## 今後の実装予定

- プロジェクト概要ページ
- 進捗追跡ダッシュボード
- チームメンバー紹介
- 詳細なプロジェクト情報

## ライセンス

Copyright © 2026 Nakayama Project
