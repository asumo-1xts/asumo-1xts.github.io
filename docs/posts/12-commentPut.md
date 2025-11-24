---
layout: doc

emoji: 💬
title: commentPut out now
description: ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ

date: 2025-11-24
permalink: "https://asumoranda.com/posts/12-commentPut.html"

prev: false
next: false

tags:
  - webdev
  - typescript
---

[アプリ開発](../tags/appdev) | [TypeSript](../tags/typescript)

# commentPut out now

## はじめに

ちょっとしたVScodeの拡張機能を作成・リリースしたので簡単に紹介します。

## 背景と目的

VScodeのコメントアウト`Ctrl+/`では、行末で実行しても行頭に記号が入力されます。

<ImageGroup
  :sources="[
    '/images/2025/12-01.gif'
  ]"
/>

一見これは便利そうですが、実際には「単純にカーソル位置にコメントアウト用の記号を入力したいだけ」の場合が多くお節介であると感じたため、お節介なしver.のコメントアウト`Ctrl+Shift+/`としてcommentPutという拡張機能を作成しました。

[Marketplace](@:https://marketplace.visualstudio.com/items?itemName=asumo-1xts.commentput)

動作はこうなります。

<ImageGroup
  :sources="[
    '/images/2025/12-02.gif'
  ]"
/>

### これ本当に要る？

#### Q. 記号（つまりPythonなら`#`）を自分で入力すれば済むのでは

A. 普段あまり触らない言語でも（あれ、コメントアウト何だっけ…）と立ち止まる時間が無くなるし、とにかく何も考えずにコメントアウトできるという便利さは案外侮れないです。

#### Q. 自分のVScodeで言語別にスニペットを設定すれば良いのでは

A. 一瞬だけそうしてみたんですが、あまりにも面倒でした。やってることの中身はほとんど同じです。

## 使い方

基本的にはインストールするだけでよく、ただキーボードの余ったキーなどに`Ctrl+Shift+/`を割り当てて使うことを想定しています。

キーバインディングや言語の追加も可能です。詳しくはREADMEを参照してください。

[Repository](@:https://github.com/asumo-1xts/vscode-commentput)

## おわりに

作者としては非常に気に入っていますが、果たして同じニーズを持つVScodeユーザーが他に存在しているのでしょうか…
