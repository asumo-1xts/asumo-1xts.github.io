---
layout: doc

emoji: 💬
title: VScodeで簡易コメントアウト
description: ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ

date: 2025-11-24
permalink: "https://asumoranda.com/posts/12-commentPut.html"

prev: false
next: false

tags:
  - appdev
  - typescript
---

[アプリ開発](../tags/appdev) | [TypeScript](../tags/typescript)

# VScodeで簡易コメントアウト

## はじめに

ささやかなVScodeの拡張機能「commentPut」をリリースしたので、簡単に紹介します。

[Marketplace](@:https://marketplace.visualstudio.com/items?itemName=asumo-1xts.commentput)

## 背景と目的

VScodeのコメントアウト`Ctrl+/`では、行末で実行しても行頭に記号が入力されます。

<ImageGroup
  :sources="[
    '/images/2025/12-01.gif'
  ]"
/>

一見これは便利そうですが、実際のところ個人的には「単純にカーソル位置にコメントアウト用の記号を入力したいだけ」の場合が多くお節介であると感じたため、お節介なしver.のコメントアウト`Ctrl+Shift+/`としてcommentPutを作るに至りました。

動作はこうなります。

<ImageGroup
  :sources="[
    '/images/2025/12-02.gif'
  ]"
/>

記号（つまりPythonなら`#`）を自分で入力すれば済むのでは？というツッコミに対しては、まあそれはそうなんですが、普段あまり触らない言語でも（あれ、コメントアウト何だっけ…）と立ち止まる時間が無くなるので案外侮れないと思っています。とにかく何も考えずにコメントアウトしたいのです。

## Getting started

基本的にはインストールするだけでよく、ただしキーボードの余ったキーなどに`Ctrl+Shift+/`を割り当てて使うことを想定しています。

キーバインディングや言語の追加も可能です。詳しくはREADMEを参照してください。

[Repository](@:https://github.com/asumo-1xts/vscode-commentput)

## おわりに

Windows 11およびDebian 13では動作を確認できていますが、Macだとどうも`/`キーがうまく効かないようです。キーバインディングを適当に変更すると動作します。僕はコーディングに関しては非Macユーザーなので、[このIssue](https://asumoranda.com/posts/(https://github.com/asumo-1xts/vscode-commentput/issues/4))は今のところ`wontfix`です。

作者としては非常に気に入っていますが、果たして同じニーズを持つVScodeユーザーが他に存在しているのでしょうか…
