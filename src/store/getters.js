import { generateColors } from '@/util/theme'
import { getItem } from '@/util/storage'
import { MAIN_COLOR } from '@/constant'
const getters = {
  showAside: state => state.app.showAside,
  // 当前主题色
  mainColor: state => state.theme.mainColor,
  // 是否为暗黑模式
  isDark: state => state.theme.isDark,
  // css 样式表
  cssVar: state => ({
    ...state.theme.variable,
    ...generateColors(getItem(MAIN_COLOR))
  })
}
export default getters
