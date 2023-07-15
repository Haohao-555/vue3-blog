<template>
    <div class="pc-nav">
      <div class="nav" v-for="(item, i) in routeList" :key="i" @click="routeTo(item.path)" :class="{'active': item.path == activeRouter ? true: false}">{{item.meta.title}}</div>
    </div>
</template>
<script setup>
import { defineProps, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeRouter = ref('')
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
.pc-nav {
  display: flex;
  .active {
    color: var(--el-color-primary);
  }
  .nav {
    padding: 0px 6px;
    cursor: pointer;
  }
}
</style>
