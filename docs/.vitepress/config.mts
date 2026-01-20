import { createContentLoader, defineConfig } from 'vitepress'
import { type DefaultTheme } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { generateSidebar } from 'vitepress-sidebar'
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from 'vitepress-plugin-group-icons'
import { linkToCardPlugin } from 'vitepress-linkcard'
import type { LinkToCardPluginOptions } from 'vitepress-linkcard'

export default defineConfig({
  lang: 'ja',
  base: '/',
  title: 'aSumoranda',
  description: 'ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ',
  markdown: {
    math: true,
    lineNumbers: true,
    config: (md) => {
      md.use(groupIconMdPlugin, {
        titleBar: { includeSnippet: true }
      })
      md.use<LinkToCardPluginOptions>(linkToCardPlugin, {})
    }
  },
  vite: {
    plugins: [groupIconVitePlugin()]
  },

  themeConfig: {
    logo: '/home.webp',
    siteTitle: false,

    outlineTitle: '目次',

    nav: [
      { text: 'すべての記事', link: '/posts' },
      { text: 'すべてのタグ', link: '/tags' },
      { text: '各種ご案内', link: '/info' },
      {
        text: '1x telescope',
        link: 'https://1xtelescope.com/',
        target: '_blank',
        rel: 'sponsored'
      }
    ],

    sidebar: [
      {
        text: 'For Mobile📱',
        collapsed: false,
        items: [
          { text: 'Home', link: '/' },
          { text: 'すべての記事', link: '/posts' },
          { text: 'すべてのタグ', link: '/tags' },
          { text: '各種ご案内', link: '/info' },
          {
            text: '1x telescope',
            link: 'https://1xtelescope.com/',
            target: '_blank',
            rel: 'sponsored'
          },
          {
            text: 'X',
            link: 'https://x.com/asumo_1xts',
            target: '_blank',
            rel: 'noopener'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/asumo-1xts',
            target: '_blank',
            rel: 'noopener'
          }
        ]
      },
      ...mySidebar()
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/asumo_1xts' },
      { icon: 'github', link: 'https://github.com/asumo-1xts' }
    ],

    footer: {
      message: 'CC-BY-SA-4.0',
      copyright: 'Some rights reserved. | ｱｽﾓ 2024-2026'
    },

    editLink: {
      pattern:
        'https://github.com/asumo-1xts/asumo-1xts.github.io/blob/main/docs/:path',
      text: 'GitHubで編集を提案'
    },

    lastUpdated: {
      text: '最終更新日',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    search: {
      provider: 'local'
    }
  },

  appearance: 'force-dark', // ダークモードのみ

  // サイトマップの生成
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://asumoranda.com'
    })
    const pages = await createContentLoader('**/*.md').load()
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))

    sitemap.pipe(writeStream)

    pages.forEach((page) => sitemap.write(page.frontmatter.permalink))
    sitemap.end()

    await new Promise((r) => writeStream.on('finish', () => r(undefined)))
  },

  // メタタグの設定
  // ページごとに設定したいものは、ここに書かないこと！（なぜかオーバーライドされない）
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:author', content: 'aSumo' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://asumo-1xts.github.io/cover01.png'
      }
    ],
    ['meta', { property: 'og:locale', content: 'ja_JP' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'aSumoranda' }],
    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:site', content: '@asumo_1xts' }],
    [
      'script',
      {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-SRVS9XNT7N'
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-SRVS9XNT7N');`
    ]
  ],

  transformHead({ assets, pageData, head }) {
    // フォントのプリロード
    const FontFile = assets.find(
      (file) =>
        /(NotoSansJP-VariableFont_wght|ZenKakuGothicNew-Regular|MoralerspaceNeonHW-Regular)\.\w+\.woff2$/
    )
    if (FontFile) {
      head.push([
        'link',
        {
          rel: 'preload',
          href: FontFile,
          as: 'font',
          type: 'font/woff2'
        }
      ])
    }

    // 動的なメタタグの設定
    const title = pageData.frontmatter.title || 'aSumoranda'
    const description = pageData.frontmatter.description || 'ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ'
    const url = pageData.frontmatter.permalink || 'https://asumoranda.com/'
    const canonicalUrl = url
    head.push(['meta', { property: 'og:title', content: title }])
    head.push(['meta', { property: 'og:description', content: description }])
    head.push(['meta', { property: 'og:url', content: url }])
    head.push(['link', { rel: 'canonical', href: canonicalUrl }])

    // まとめて返す
    return head
  }
})

function mySidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '主な記事',
      base: '/posts/',
      collapsed: false,
      items: generateSidebar({
        documentRootPath: 'docs',
        scanStartPath: 'posts',
        useTitleFromFrontmatter: true,
        sortMenusByFrontmatterDate: true,
        sortMenusOrderByDescending: true,
        excludeFilesByFrontmatterFieldName: 'hidden'
      }) as any
    }
  ]
}
