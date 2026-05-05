---
layout: home

title: Home

hero:
  name: aSumoranda
  tagline: ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ
  image:
    src: cover01.webp
    alt: aSumoranda

permalink: 'https://asumoranda.com/'
---

<CustomFeature :features="[
  { 
    icon: '🕰️', 
    title: 'KiCadで偽タイムラプスを生成', 
    link: '/posts/13-KiCad-timelapse',
    badges: [
      { text: 'KiCad', link: '/tags/kicad' },
      { text: 'Python', link: '/tags/python' }
    ],
  },
    { 
    icon: '🎴', 
    title: 'VitePressでリンクカードを貼る', 
    link: './posts/10-vitepress-linkcard',
    badges: [
      { text: 'Web開発', link: '/tags/webdev' },
      { text: 'JS/TS', link: '/tags/jsts' }
    ],
  },
    { 
    icon: '🔨', 
    title: 'DOD FX96のトレイルバイパス化', 
    link: './posts/05-trailMod',
    badges: [
      { text: 'エフェクター改造', link: '/tags/modpedals' },
      { text: 'PIC', link: '/tags/pic' },
      { text: 'C/C++', link: '/tags/ccpp' },
    ],
  },
    { 
    icon: '📚', 
    title: '2025年に読んだものとその感想', 
    link: '/posts/04-books2025',
    badges: [
      { text: '雑記', link: '/tags/justnote' },
    ],
  },
    { 
    icon: '📇', 
    title: 'BibLaTeXで欧文と和文を混ぜる', 
    link: '/posts/03-BibLaTeXJP',
    badges: [
      { text: 'LaTeX', link: '/tags/latex' }
    ],
  },
  { 
    icon: '🎛️', 
    title: '理想のMIDIコントローラを自作', 
    link: '/posts/02-HeartLand',
    badges: [
      { text: 'その他の工作', link: '/tags/otherdiy' },
      { text: 'MIDI', link: '/tags/midi' },
      { text: 'Arduino', link: '/tags/arduino' },
      { text: 'C/C++', link: '/tags/ccpp' }
    ],
  },
]" />
