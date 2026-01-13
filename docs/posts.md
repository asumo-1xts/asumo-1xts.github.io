---
layout: doc

title: すべての記事
description: ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ

permalink: "https://asumoranda.com/posts.html"

prev: false
next: false

editLink: false
lastUpdated: false
---

# すべての記事

<script lang="ts" setup>
    import { data as posts } from "./.vitepress/posts.data";
    import moment from 'moment';
</script>

<ul style="list-style: none;">
    <li v-for="post of posts">
        <span class="text-sm">{{ moment(post.frontmatter.date).format('YYYY-MM-DD') }}&emsp;</span>
        <a :href="`${post.url}`">{{ post.frontmatter.title }}</a>
    </li>
</ul>
