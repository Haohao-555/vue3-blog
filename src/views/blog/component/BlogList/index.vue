<!--
 * @Date: 2022-07-24 15:01:27
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog-1\src\views\blog\component\BlogList\index.vue
-->
<template>
   <div class="blog-list">
      <div v-for="item in list" :key="item.id">
         <blog-item :blog="item"></blog-item>
      </div>
   </div>
</template>
<script setup>
import { defineProps } from 'vue'
import BlogItem from './component/BlogItem'
defineProps({
  list: {
    require: true,
    type: Array
  }
})
</script>
<style lang="scss" scoped>
</style>
