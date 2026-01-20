---
layout: doc

title: すべてのタグ
description: ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ

permalink: 'https://asumoranda.com/tags.html'

prev: false
next: false

editLink: false
lastUpdated: false
---

<style>
.column-left{
  float: left;
  width: 50%;
  text-align: left;
}
.column-right{
  float: right;
  width: 50%;
  text-align: left;
}
.column-one{
  float: left;
  width: 100%;
  text-align: left;
}
</style>

<script lang="ts" setup>
    import { data as tags } from "./.vitepress/tags.data"
    import PostCounter from "./.vitepress/components/PostCounter.vue"
</script>

# すべてのタグ

<br/>

<div class="column-left">

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

</div>

<div class="column-right">

</div>

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
