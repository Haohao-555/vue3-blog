<!--
 * @Date: 2022-09-03 09:40:15
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog\src\components\NavHeader\component\PCNav.vue
-->
<template>
    <div class="pc-nav">
      <div class="nav" v-for="(item, i) in routeList" :key="i" @click="routeTo(item.path)" :class="{'active': item.path == activeRouter ? true: false}">{{item.meta.title}}</div>
    </div>
</template>
<script setup>
import { defineProps, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeRouter = ref('/blog')
defineProps({
  routeList: {
    type: Array,
    default: () => {
      return []
    }
  }
})

watch(
  () => router.currentRoute.value.path,
  val => {
    activeRouter.value = val
  },
  {
    immediate: true
  }
)

const routeTo = path => {
  router.push({
    path: path
  })
}
</script>
<style lang="scss" scoped>
@import '@/styles/theme.scss';
.pc-nav {
  display: flex;
  .active {
    color: $activeText;
  }
  .nav {
    padding: 0px 16px;
    cursor: pointer;
  }
}
</style>
