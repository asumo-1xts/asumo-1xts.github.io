---
layout: doc

emoji: 🎴
title: VitePressでリンクカードを貼る
description: ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ

date: 2025-11-06
permalink: "https://asumoranda.com/posts/10-vitepress-linkcard.html"

prev: false
next: false

tags:
  - webdev
  - typescript
---

[Web開発](../tags/webdev) | [TypeSript](../tags/typescript)

# VitePressでリンクカードを貼る

## はじめに

VitePress用のリンクカード生成プラグイン「vitepress-linkcard」をリリースしたので簡単に紹介します。

[GitHub](@:https://github.com/asumo-1xts/vitepress-linkcard)

リンクカードはこんな感じ↑です。後述しますが、カードの枠線や塗りつぶしの色はオプションとして自由に設定できます。

なお、このプラグインは[markdown-it-link-to-card](https://github.com/luckrya/markdown-it-link-to-card)をフォークして作られました。

## Getting started

### インストール

::: code-group

```sh [npm]
npm install -D vitepress-linkcard 
```

```sh [yarn]
yarn add -D vitepress-linkcard
```

```sh [pnpm]
pnpm add -D vitepress-linkcard
```

:::

### 使い方

::: code-group

``` ts [docs/.vitepress/config.ts]
import { defineConfig } from "vitepress";
import { linkToCardPlugin } from "vitepress-linkcard";
import type { LinkToCardPluginOptions } from "vitepress-linkcard";

export default defineConfig({
  // ...
  markdown: {
    config: (md) => {
      md.use<LinkToCardPluginOptions>(linkToCardPlugin, {
        // // オプション
        // target: "_self",
        // borderColor: "#039393",
        // bgColor: "#CB3837"
      });
    },
  }
  // ...
});
```

:::

URLに`@:`のプレフィクスを付けるとリンクカードが生成されます。

::: code-group

``` md [*.md]
[example](@:https://example.com)
```

:::

## オプション

### borderColor

次のように、リンクカードの枠線の色を指定できます。

- `#7d7d7dff` (default)
- `rgba(3, 147, 147, 0.39)`
- ...

### bgColor

次のように、リンクカードの塗りつぶしの色を指定できます。

- `#7d7d7d00` (default)
- `rgba(3, 147, 147, 0.39)`
- ...

### target

次のように、リンクカードを踏んだときのリンクの開き方を指定できます。

- `_blank` (default)
- `_self`
- `_top`
- `_parent`

## その他の仕様

### `.linkcard_cache.json`

このファイルは自動的に生成され、解析されたメタデータをキャッシュします。必要に応じて編集できますが、gitignoreするとビルド時間が長くなります。

### `github.com`ドメインへの特殊な操作

URLのドメインが`github.com`のとき、titleとdescriptionの内容の重複を避けるべく以下に示すようなトリミングが実行されます。

| | Title | Description |
| - | - | - |
| Before | GitHub - asumo-1xts/vitepress-linkcard: A VitePress plugin to generate a pretty linkcard. | A VitePress plugin to generate a pretty linkcard. Contribute to asumo-1xts/vitepress-linkcard development by creating an account on GitHub. |
| After | asumo-1xts/vitepress-linkcard | A VitePress plugin to generate a pretty linkcard. |

## おわりに

なかなか良い感じだと思うので、良かったら使ってみてください。あと、ホバーアニメーションを実装してくれる白馬のコントリビューターを[募集中](https://github.com/asumo-1xts/vitepress-linkcard/issues/2)です！

<br/>

---
