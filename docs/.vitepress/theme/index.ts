import DefaultTheme from 'vitepress/theme-without-fonts'
import type { Theme as ThemeConfig } from 'vitepress'
import { useData, useRoute } from 'vitepress'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'
import { ImageGroup } from '@miletorix/vitepress-image-group'
import imageViewer from 'vitepress-plugin-image-viewer'
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'
import './fonts.css'
import './colors.css'
import 'viewerjs/dist/viewer.min.css'
import 'vitepress-plugin-codeblocks-fold/style/index.css'
import 'virtual:group-icons.css'
import '@miletorix/vitepress-image-group/style.css'
import CustomBadge from '../components/CustomBadge.vue'
import Custom404 from './404.vue'

const CustomTheme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: Custom404,
  enhanceApp: (ctx) => {
    ctx.app.component('vImageViewer', vImageViewer)
    ctx.app.component('ImageGroup', ImageGroup)
    ctx.app.component('CustomBadge', CustomBadge)
  },
  setup() {
    const route = useRoute()
    const { frontmatter } = useData()
    imageViewer(route)
    codeblocksFold({ route, frontmatter }, true, 500)
  }
}

export default CustomTheme
