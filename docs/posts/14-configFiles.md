---
layout: doc

emoji: 🪴
title: Linux設定ファイル大集合
description: ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ

date: 2025-12-28
permalink: "https://asumoranda.com/posts/14-configFiles.html"

prev: false
next: false

tags:
  - justnote
---

[雑記](../tags/justnote)

# Linux設定ファイル大集合

## はじめに

クラウドに上げて管理するほどではないけど、大まかなバックアップはしておきたい…ということで、紹介を兼ねてrcファイルなどを貼ります。

## `.zshrc` & `.zsh_aliases`

LinuxではZshを使っており、ご多分に漏れず盆栽よろしく`.zshrc`をいじいじしております。このあと紹介されないツールとしては[zoxide](https://github.com/ajeetdsouza/zoxide)、[mise](https://mise.jdx.dev/)、[uv](https://docs.astral.sh/uv/)がアクティベートされています。どれも気に入っていますが、特にmiseはタスクランナーとしても使えることに気づいてから導入場面が増えました。

また、デフォルトのaliasではなく[abbr](https://github.com/olets/zsh-abbr)を使っています。[you-should-use](https://github.com/MichaelAquilina/zsh-you-should-use)との共存ができれば文句無しなのですが、それは流石に求めすぎというものでしょう。

::: code-group
<<< @/snippets/2025/14-.zshrc{shell} [.zshrc ~vscode-icons:file-type-shell~]
<<< @/snippets/2025/14-.zsh_aliases{shell} [.zsh_aliases ~vscode-icons:file-type-shell~]
:::

## `sheldon/plugins.toml`

Zshのプラグイン管理には[Sheldon](https://github.com/rossmacarthur/sheldon)を使っています。何でも良いと言えば何でも良いのですが、Rust製と言われるとグラッときてしまいます。

::: code-group
<<< @/snippets/2025/14-plugins.toml{toml} [plugins.toml ~vscode-icons:file-type-toml~]
:::

## `wezterm.lua` & `starship.toml`

ターミナルのエミュレータには[WezTerm](https://wezterm.org/)を、装飾には[Starship](https://starship.rs/ja-JP/)を使っています。どちらもWindows対応という明確な利点があり、設定ファイルを使いまわせます。ちなみにどちらもRust製です。

::: code-group
<<< @/snippets/2025/14-wezterm.lua{lua} [wezterm.lua ~vscode-icons:file-type-lua~]
<<< @/snippets/2025/14-starship.toml{toml} [starship.toml ~vscode-icons:file-type-toml~]
:::

<ImageGroup
  :sources="[
    '/images/2025/14-01.webp'
  ]"
  type="big"
  caption="上記の設定ファイルを適用した様子"
/>

## おわりに

他人の`.zshrc`とかを見るのってかなり楽しい行為かもしれません。皆様も開示してください！
