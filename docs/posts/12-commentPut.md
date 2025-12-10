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

[アプリ開発](../tags/appdev) | [TypeScript](../tags/typescript)

# commentPut out now

## Introduction

I have released a small VSCode extension called "commentPut", so let me briefly introduce it.

[Marketplace](@:https://marketplace.visualstudio.com/items?itemName=asumo-1xts.commentput)

## Background and Purpose

In VSCode, the comment-out shortcut `Ctrl+/` inserts the comment symbol at the beginning of the line, even if it is executed at the end of the line.

<ImageGroup
  :sources="[
    '/images/2025/12-01.gif'
  ]"
/>

At first, this seems convenient, but I often find it intrusive when I just want to insert a comment symbol where the cursor is. To address this, I created the commentPut extension, which is a less intrusive version of the comment-out shortcut and is triggered by `Ctrl+Shift+/`.

Here’s how it works:

<ImageGroup
  :sources="[
    '/images/2025/12-02.gif'
  ]"
/>

You might ask, "Why not just type the symbol yourself?" That's true, but this extension eliminates the need to pause and think about the comment symbol for languages you don't use often. It's surprisingly useful. I just want to comment out without thinking.

## How to Use

Essentially, all you need to do is install it. It's designed to be used by assigning `Ctrl+Shift+/` to an unused key on your keyboard.

You can also customise key bindings and add support for additional languages. For more details, refer to the README.

[Repository](@:https://github.com/asumo-1xts/vscode-commentput)

## Finish

It has been verified on Windows 11 and Debian 13. However, on a Mac, the `/` key does not seem to work well. You can change the key binding to resolve this issue. As I don't use a Mac for coding, [this issue]((https://github.com/asumo-1xts/vscode-commentput/issues/4)) is currently marked as `wontfix`.

I’m very fond of this extension, but I wonder if other VSCode users have the same need...
