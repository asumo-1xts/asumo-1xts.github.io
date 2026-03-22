---
layout: doc

emoji: 🦓
title: Stripeでサーバーレスに簡易なECサイトを実装する

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

# Stripeでサーバーレスに簡易なECサイトを実装する

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

上記を連携して在庫の表示と更新までサーバーレスに実装できたので、その方法をまとめておきます。

::: details 個人的な思想の話

「公式サイトを運営しつつ決済のためにECサイトも利用する」というケースはそう珍しいものではないと思いますが、個人的に

- 製品ページがインターネット上に2つ存在することになる
- それらの管理が一元的でない
- 公式サイトからECサイトに飛ばされると購入時の体験があまり良くない

といった不満があり、公式サイトで直接買い物できるのが一番良いという思想を持っていました。しかしそのためには、一般的には（方法はどうあれ）サーバーを建てて管理する面倒が生じます[^1]。

そこで、何とかサーバーレスになんちゃってECサイトを実装できないか？と考えた結果、今回ご紹介するスタイルに辿り着いたという次第です。

:::

## 環境

- VitePress v1.6.4（サーバーサイドレンダリングなら何でもOK）

## 構想

諸々の動きは次の図の通りです。それぞれのステップについてソースコードなど貼りつつ説明していきます[^2]。

## Stripe Webhook

## Netlify Functions

## GitHub Actions

## 購入者にメールを自動送信する

おまけ

## おわりに

超個人的な思想の話になるのですが、

<br/>

[^1]: この世にはサーバーを建てて管理することに幸福を覚える人も一定数いるみたいです

[^2]: ？？？「_解説や応援が必要なら、私に任せてください！_」
