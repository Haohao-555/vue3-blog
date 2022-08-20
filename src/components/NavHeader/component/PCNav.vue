<template>
    <div class="pc-nav">
      <div class="nav" v-for="(item, i) in routeList" :key="i" :class="{'active': item.route == activeRouter ? true: false}" @click="routeTo(item)">{{item.text}}</div>
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

const routeTo = (item) => {
  router.push({
    path: item.route
  })
}
</script>
<style lang="scss" scoped>
.pc-nav {
   display: flex;
  .active {
    color: #c00000;
  }
  .nav {
    padding: 0px 16px;
    cursor: pointer;
  }
}
</style>
