---
layout: doc

title: すべてのタグ
description: ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ

permalink: "https://asumoranda.com/tags.html"

prev: false
next: false

editLink: false
lastUpdated: false
---

# すべてのタグ

<script lang="ts" setup>
    import { data as tags } from "./.vitepress/tags.data"
    import PostCounter from "./.vitepress/components/PostCounter.vue"
</script>

<br/>

<ul style="list-style: none; padding-left: 0;">
    <li v-for="tagpage of tags">
        <a :href="`${tagpage.url}`" class="font-semibold text-lg">
            <Badge type="tag" :text="tagpage.frontmatter.title" />
        </a>
        <span class="text-sm">
            (<PostCounter :tag="tagpage.url.replace('/tags/', '').replace('.html', '')"/>)
        </span>
    </li>
</ul>
