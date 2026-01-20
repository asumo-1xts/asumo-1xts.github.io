<script setup lang="ts">
interface Props {
  text?: string
  type?: 'tag'
}
withDefaults(defineProps<Props>(), {
  type: 'tag'
})
</script>

<template>
  <span class="VPBadge" :class="type">
    <slot>{{ text }}</slot>
  </span>
</template>

<style>
.VPBadge {
  display: inline-block;
  margin-left: 2px;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 0 10px;
  line-height: 22px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  transform: translateY(-2px);
}

.VPBadge.small {
  padding: 0 6px;
  line-height: 18px;
  font-size: 10px;
  transform: translateY(-8px);
}

.VPDocFooter .VPBadge {
  display: none;
}

.vp-doc h1 > .VPBadge,
.vp-doc h2 > .VPBadge {
  margin: 0 0 0 2px;
  vertical-align: middle;
}

.vp-doc h2 > .VPBadge {
  padding: 0 8px;
}

.vp-doc h3 > .VPBadge {
  vertical-align: middle;
}

.vp-doc h4 > .VPBadge,
.vp-doc h5 > .VPBadge,
.vp-doc h6 > .VPBadge {
  vertical-align: middle;
  line-height: 18px;
}

.VPBadge.tag {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background-color: transparent;
  transition: all 0.25s;
}

.VPBadge.tag:hover {
  color: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
  background-color: transparent;
}
</style>
