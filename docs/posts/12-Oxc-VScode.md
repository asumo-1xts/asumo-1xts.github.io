---
layout: doc

emoji: ⚓
title: Oxc+VScode 導入トラブル解決
description: ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ

date: 2026-01-21
permalink: 'https://asumoranda.com/posts/12-Oxc-VScode.html'

prev: false
next: false

tags:
  - post2026
  - trouble
  - typescript

hidden: true
---

# Oxc+VScode 導入トラブル解決

[<Badge type="tag" text="トラブルシュート" />](../tags/trouble)
[<Badge type="tag" text="TypeScript" />](../tags/typescript)

## はじめに

速いと噂の[Oxfmt](https://oxc.rs/docs/guide/usage/formatter)を使ってみるべく[OxcのVScode拡張機能](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)を導入したところ、VScodeの再起動のたびに「ソース: Oxc」から10件ほどのエラー（一番上のエラーメッセージは「_oxc client: couldn't create connection to server._」）が通知されてしまいました。

出力を見てみると

> [info] [Error - 4:33:23 AM] Server process exited with code 127.
>
> [info] env: ‘node’: No such file or directory

とのことで、OxcがNodeJSを認識する必要があるのにしていないようです。

なおターミナルからOxfmtの実行は可能です。

## 環境

- Debian 13 on WSL2
- NodeJS v25.4.0 **by mise** 2026.1.5
- Oxfmt v0.26.0
- Oxc（VScode拡張機能） v1.39.0

## 解決

どうやらOxcは`/usr/`内からNodeJSを探すらしく、miseでNodeJSを管理している私の環境では

```shell
> which node
~/.local/share/mise/installs/node/25.4.0/bin/node
```

ご覧の通りなので見つかるはずがありません。

本来のバイナリフォルダにシンボリックリンクを貼ると問題なく動くようになりました。

```shell
sudo ln -s $(which node) /usr/local/bin/node
```

あるいは潔くNodeJSをaptパッケージとしてインストールするのも手ではあります。

## おわりに

Prettierの拡張機能はそもそもスタンドアロンで動いてくれるので、今回はその分だけ迷走してしまった感があります。

晴れて現在このブログも逐一Oxfmtされており、速いのは勿論のこと、追加設定なしでMarkdownやVueに効いてくれる上に`package.json`のソートまでしてくれて至れり尽くせりです。

ぜんぜん関係ないのですが、Oxcを開発しているVoidZero社のメンバーを眺めていたら日本人の方がいて凄～となりました。ブログを読む限りでは琵琶湖の畔からフルリモートらしく、夢がある…。
