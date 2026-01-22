---
layout: doc

emoji: 🕰️
title: KiCadで偽のタイムラプスを生成
description: ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ

date: 2026-01-23
permalink: 'https://asumoranda.com/posts/13-KiCad-timelapse.html'

prev: false
next: false

tags:
  - post2026
  - kicad
  - python
---

# KiCadで偽のタイムラプスを生成

[<Badge type="tag" text="KiCad" />](../tags/kicad)
[<Badge type="tag" text="Python" />](../tags/python)

## はじめに

ソースコードの歴史をコミット履歴に沿ってタイムラプス風に再生するOSS「[gitlogue](https://github.com/unhappychoice/gitlogue)」を見かけて、KiCadの基板データでも似たようなことができたら映えるだろうな～と思いやってみました。

<ImageGroup
  :sources="[
    '/images/2026/13-01.gif'
  ]"
  type="big"
  caption="言うまでもなく、Arduino UNOの表側です"
/>

「kicad timelapse」でググるとマサチューセッツ大学の先生が[既にこれを達成している](https://blog.krastanov.org/2020/02/17/pcb-layout-timelapse/)のですが、彼の公開してくれているソースコードが（おそらくKiCadのバージョン違い等の理由により）手元でうまく動かなかったため私の方でもそれなりに頑張りました。

## 環境

- Debian 13 on WSL2（他の環境では試せていません）
- KiCad 9.0.7

## 構想

（ちなみにWindows 11では`C:\Users\asumo\AppData\Local\Programs\KiCad\9.0\bin\Lib\site-packages\pcbnew.py`）
