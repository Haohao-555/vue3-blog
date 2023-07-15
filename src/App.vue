<template>
  <router-view/>
</template>
<script setup>
import { useTheme } from '@/hooks/useTheme'
const { initTheme } = useTheme()
// 初始化主题色
initTheme()
</script>
<style lang="scss">

</style>
