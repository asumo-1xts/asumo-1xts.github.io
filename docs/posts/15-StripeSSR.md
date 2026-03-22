---
layout: doc

emoji: 🦓
title: Stripeで簡易なECサイトをサーバーレスに実装する

date: 2026-03-22
permalink: 'https://asumoranda.com/posts/12-Oxc-VScode.html'

prev: false
next: false

tags:
  - post2026
  - webdev
  - python
  - jsts
---

# Stripeで簡易なECサイトをサーバーレスに実装する

[<Badge type="tag" text="Web開発" />](../tags/webdev)
[<Badge type="tag" text="JS/TS" />](../tags/jsts)
[<Badge type="tag" text="Python" />](../tags/python)

## はじめに

[1x telescope 公式サイト](https://1xtelescope.com/)の各製品ページにStripeの購入ボタンを設置し、他のECサイト等に飛ぶことなくダイレクトに商品を購入できるようにしました。

<ImageGroup
  :sources="[
    '/images/2026/15-01.webp',
    '/images/2026/15-02.webp'
  ]"
  type="double"
/>

- Stripe Webhook
- Netlify Functions
- GitHub Actions

上記を連携して在庫の表示と更新までサーバーレスに実装できたので、その方法をざっくりまとめておきます。なお当該のGitHubリポジトリは流石にPrivateです、悪しからず。

::: details 個人的な思想の話

「公式サイトを運営しつつ決済のためにECサイトも利用する」というケースは2026年現在そう珍しいものでもないと思いますが、個人的に

- 製品ページがインターネット上に2つ存在することになる
- それらの管理が一元的でない
- 公式サイトからECサイトに飛ばされると購入時の体験があまり良くない

といった不満があり、公式サイトで直接買い物できるのが一番良いという思想を持っていました。しかしそのためには、一般的には（方法はどうあれ）サーバーを建てて管理する面倒が生じます[^1]。

そこで、何とかサーバーレスになんちゃってECサイトを実装できないか？と考えた結果、今回ご紹介するスタイルに辿り着いたという次第です。

:::

## 環境

- Netlifyの静的ホスティングサービスにサーバーサイドレンダリングなサイトをデプロイしている[^2]

## 構想

諸々の動きは次の図の通りです。それぞれのステップについてソースコードなど貼りつつ説明していきます[^3]。

## Stripe

### Webhook

#### 送信先を追加する

Stripeのダッシュボードから「設定」「Payments」と進んで、ページの一番下の「次のステップ」にある「Webhookを設定」クリックします。するとワークベンチとやらが下からニュッと現れるので、「＋送信先を追加する」して以下のように設定します。

| 設定項目             | 値                                                      |
| -------------------- | ------------------------------------------------------- |
| イベントのリッスン先 | 「お客様のアカウント」                                  |
| APIバージョン        | （デフォルト）                                          |
| イベント             | `checkout.session.completed`                            |
| 送信先のタイプ       | 「Webhookエンドポイント」[^4]                           |
| 送信先名             | （任意に決めてOK）                                      |
| エンドポイントURL    | `https://example.com/.netlify/functions/stripe-webhook` |

#### 署名シークレット

ここで「署名シークレット」なる`whsec_***...`みたいな秘密鍵が発行されるので、手元に控えておきます。

#### APIキーの発行

ダッシュボードに戻って、「開発者」「APIキー」「APIキーの管理」と進んで「制限付きのキー」を発行します。このとき権限は以下のように設定します。

| 設定項目                                    | 値                                                      |
| ------------------------------------------- | ------------------------------------------------------- |
| このAPIキーの使用方法                       | 「このキーを別のウェブサイトに提供」                    |
| 名前                                        | （任意に決めてOK）                                      |
| URL                                         | `https://example.com/.netlify/functions/stripe-webhook` |
| このキーに対する権限を<br/>カスタマイズする | ☑                                                       |

| 項目     | 権限     |
| -------- | -------- |
| Checkout | 読み取り |
| Webhook  | 読み取り |
| 他       | なし     |

## Netlify Functions

### 環境変数の登録

#### GitHub PAT

プロジェクトの「Environment Variables」に以下を登録します。

| 変数名                  | 中身                                                            |
| ----------------------- | --------------------------------------------------------------- |
| `GITHUB_TOKEN`          | 当該リポジトリのActionsを読み書きできるPersonal access token    |
| `STRIPE_WEBHOOK_SECRET` | [さっき](#署名シークレット)の署名シークレット（`whsec_***...`） |
| `STRIPE_KEY_SECRET`     | [さっき](#apiキーの発行)のAPIキー                               |

::: code-group
<<< @/snippets/2026/15-stripe-webhook.js{javascript} [netlify/functions/stripe-webhook.js]
:::

## GitHub Actions

## 購入者にメールを自動送信する

おまけ

## おわりに

## 参考

[GitHub Actions の repository_dispatch イベントを使ってリポジトリ間でリリースイベントを伝播させる](@:https://qiita.com/takat0-h0rikosh1/items/d464f4733ff81fda23fc)
[GitHub ActionsとPythonで、自動メール通知システムを実装してみた](@:https://qiita.com/nakano0328/items/6deed8e4a83100104802)

<br/>

[^1]: この世にはサーバーを建てて管理することに幸福を覚える人も一定数いるみたいです

[^2]: 言わずもがな、VercelやCloudFlareでも同様のノリで実装できそうです

[^3]: ？？？「_解説や応援が必要なら、私に任せてください！_」

[^4]: 初めAWSの方を使おうとして挫折しました
