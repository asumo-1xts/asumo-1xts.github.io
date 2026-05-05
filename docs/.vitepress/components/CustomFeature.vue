<script setup lang="ts">
// 型定義の整理
interface Badge {
  text: string
  link?: string
}

interface Feature {
  icon: string
  title: string
  link: string
  badges?: (string | Badge)[] // 文字列とオブジェクト両方許容
  target?: string
  rel?: string
}

defineProps<{
  features: Feature[]
}>()

// バッジの型を正規化するユーティリティ
const normalizeBadge = (b: string | Badge): Badge =>
  typeof b === 'string' ? { text: b } : b
</script>

<template>
  <div class="custom-features">
    <div class="items">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="item-wrapper"
      >
        <div class="item">
          <div class="icon">{{ feature.icon }}</div>

          <div class="content">
            <!-- 1行目: タイトル（カード全体のリンク） -->
            <a
              :href="feature.link"
              :target="feature.target"
              :rel="feature.rel"
              class="title-link"
            >
              <h3 class="title">{{ feature.title }}</h3>
            </a>

            <!-- 2行目: バッジリスト（個別リンク対応） -->
            <div v-if="feature.badges?.length" class="meta-line">
              <div class="badge-list">
                <template
                  v-for="b in feature.badges"
                  :key="typeof b === 'string' ? b : b.text"
                >
                  <component
                    :is="normalizeBadge(b).link ? 'a' : 'span'"
                    :href="normalizeBadge(b).link"
                    class="VPBadge tag"
                    :class="{ 'has-link': normalizeBadge(b).link }"
                  >
                    {{ normalizeBadge(b).text }}
                  </component>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../theme/badge.css';

.custom-features {
  margin: 1.2rem 0;
  width: 100%;
}

.items {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
}

.item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 12px 16px;
  background-color: var(--vp-c-bg-soft);
  transition:
    border-color 0.2s,
    background-color 0.2s;
  min-width: 0;
}

.item:hover {
  border-color: var(--vp-c-brand-1);
}

.icon {
  flex-shrink: 0;
  font-size: x-large;
  line-height: 1;
}

.content {
  flex-grow: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.title-link {
  text-decoration: none;
  color: inherit;
}

/* カード全体をクリック可能にするための疑似要素 */
.title-link::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.title {
  margin: 0 0 0 0.33rem !important;
  font-family: 'mySubFont', sans-serif;
  font-size: medium;
  font-weight: 600;
  line-height: 1.4;
  color: var(--vp-c-text-1);
  display: -webkit-box;
  line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
}

.meta-line {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  pointer-events: none;
}

.badge-list {
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
}

:deep(.VPBadge) {
  margin-top: 4px;
  text-decoration: none;
  pointer-events: none;
}

/* 
   リンクを持っているバッジ（.has-link）だけは
   クリックできるようにイベントを復活させる
*/
.VPBadge.has-link {
  pointer-events: auto;
}
</style>
