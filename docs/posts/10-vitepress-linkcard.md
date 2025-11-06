---
layout: doc

emoji: 
title: vitepress-linkcard out now
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

# vitepress-linkcard out now

[GitHub](@:https://github.com/asumo-1xts/vitepress-linkcard)

As shown above, you can generate a pretty linkcard with OGP in Vitepress.

Since [@asumo-1xts](https://github.com/asumo-1xts) isn't well-versed in web development, contributors are always welcome to help implement new features: especially [hover animation](https://github.com/asumo-1xts/vitepress-linkcard/issues/2).

## Getting started

### Install

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

### Usage

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
        // // Supported options:
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

::: code-group
``` md [*.md]
[example](@:https://example.com)
```
:::

## Supported options

### borderColor

Specifies the border color of linkcards with a color code. For exmaple:

- `#7d7d7dff` (default)
- `rgba(3, 147, 147, 0.39)`
- ...

### bgColor

Specifies the background color of linkcards with a color code. For exmaple:

- `#7d7d7d00` (default)
- `rgba(3, 147, 147, 0.39)`
- ...

### target

Specifies the target window in which to open a link.

- `_blank` (default)
- `_self`
- `_top`
- `_parent`

## Other specifications

### `.linkcard_cache.json`

It is generated automatically and cache all the parsed metadata.

You can edit it as needed, but ignoring it will increase build time.

### Special handling for `github.com`

When the domain is `github.com`, trimming is performed as shown in the following example to avoid duplication of the title and description.
| | Title | Description |
| - | - | - |
| Before | GitHub - asumo-1xts/vitepress-linkcard: A VitePress plugin to generate a pretty linkcard. | A VitePress plugin to generate a pretty linkcard. Contribute to asumo-1xts/vitepress-linkcard development by creating an account on GitHub. |
| After | asumo-1xts/vitepress-linkcard | A VitePress plugin to generate a pretty linkcard. |

---
