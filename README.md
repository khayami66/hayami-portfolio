# やさしいAI先生｜Hayami ポートフォリオサイト

AIエンジニア「やさしいAI先生｜Hayami」の個人HPです。

## 公開URL

https://khayami66.github.io/hayami-portfolio/

## 概要

忙しい先生や保護者に寄り添い、AIと自動化で毎日にゆとりを生み出すお手伝いをしています。

### サイト構成

- ヒーロー（名前・肩書き・キャッチコピー）
- プロフィール（自己紹介・活動理念）
- できること（4つのサービス）
  - 業務の自動化 → [実例：出品業務のAI化](./works/listing-ai.html)
- お問い合わせ（メールリンク）

## ファイル構成

```
HP/
├── index.html          # メインHTML
├── styles.css          # スタイルシート（共通）
├── work-detail.css     # スタイルシート（実例の詳細ページ専用）
├── script.js           # アニメーション・ナビゲーション
├── works/
│   └── listing-ai.html # 実例：出品業務のAI化
├── assets/
│   └── works/
│       └── listing-ai/ # 実例で使う画像・PDF
├── README.md           # このファイル
├── REQUIREMENTS.md     # 要件定義書
├── WORK_PROCESS.md     # 作業工程手順書
└── DEV_LOG.md          # 開発日記
```

## 実例（ポートフォリオ）を追加する手順

1. `assets/works/<名前>/` に画像・PDFなどの素材を置く（画像は900px程度・JPEGに最適化）
2. `works/<名前>.html` を作成する（`works/listing-ai.html` をひな形にできる）
3. `index.html` の該当する「できること」カードに `.service-example` と `.service-link` を追加する
4. 動画はリポジトリに入れず、**YouTube限定公開**して `iframe` で埋め込む

## ドキュメント

| ファイル | 内容 |
|----------|------|
| [REQUIREMENTS.md](./REQUIREMENTS.md) | 要件定義書（目的・ターゲット・機能要件） |
| [WORK_PROCESS.md](./WORK_PROCESS.md) | 作業工程手順書（チェックリスト） |
| [DEV_LOG.md](./DEV_LOG.md) | 開発日記（決定事項・変更履歴） |

## 技術スタック

- HTML / CSS / JavaScript
- Google Fonts（チョーク風フォント）
- GitHub Pages

## お問い合わせ

メール: khayami66@gmail.com

---

© 2026 やさしいAI先生｜Hayami
