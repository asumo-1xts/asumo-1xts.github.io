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

ソースコードの歴史をコミット履歴に沿ってタイムラプス風に再生するOSS「[gitlogue](https://github.com/unhappychoice/gitlogue)」を見かけて、KiCadの基板データでタイムラプスを作れたら映えるだろうな～と思いやってみました。

<ImageGroup
  :sources="[
    '/images/2026/13-01.gif'
  ]"
  type="big"
  caption="言うまでもなく、Arduino UNOの表側です"
/>

「kicad timelapse」でググったところマサチューセッツ大学の先生が[既にやっていた](https://blog.krastanov.org/2020/02/17/pcb-layout-timelapse/)のですが、彼の公開してくれているソースコードが（おそらくKiCadのバージョン違い等の理由により）手元でうまく動かなかったため、私の方でもそれなりに頑張りました。

## 環境

- Debian 13 on WSL2
- KiCad 9.0.7
- Python 3.13.5

他の環境で試せていませんが、少なくともWindowsに関しては何とかなりそうに見えます。

## 方針

早めに断っておきますが、本記事の方法では**実際の作業工程に基づいたタイムラプスは生成できません**。冒頭でgitlogueを紹介してしまいましたがGitも関係ありません。代わりに、一切の迷いなく図面を完成させた世界線の、**偽りのタイムラプスを捏造します**。

具体的には、KiCadには内部のC++をPythonでラップしたAPIが同梱されているので、これを叩いて`.kicad_pcb`ファイル内を走査しつつ図面を出力していきます。

### 処理の概要

1. `.kicad_pcb`ファイルを読み込む（このあと色々されますが変更は保存されません）
2. 塗りつぶし領域を一つ消去したうえで、基板をSVG画像にプロット
3. 塗りつぶし領域が無くなるまで2を繰り返す
4. 配線についても2~3を行う
5. マーカーについても2~3を行う
6. フットプリントについても2~3を行う
7. ImageMagickでSVG画像をPNG画像に変換
8. PNG画像をFFmpegでつなぎ合わせて動画にする
9. 適宜トリミングして完成

## 実行

### コマンドの準備

```shell
apt install kicad imagemagick ffmpeg
```

KiCadを他のルートでインストールする場合は、同梱されるAPI（Pythonファイル）の場所が変わってくるかもしれませんのでご注意ください。

加えて、`python3`コマンドが有効であることも要確認です。

```shell
python3 --version
```

### スクリプト

::: code-group
<<< @/snippets/2026/13-main.py{python} [main.py ~vscode-icons:file-type-python~]
<<< @/snippets/2026/13-board_process.py{python} [board_process.py ~vscode-icons:file-type-python~]
<<< @/snippets/2026/13-external_tools.py{python} [external_tools.py ~vscode-icons:file-type-python~]
:::

（ちなみにWindows 11では`C:\Users\asumo\AppData\Local\Programs\KiCad\9.0\bin\Lib\site-packages\pcbnew.py`）
