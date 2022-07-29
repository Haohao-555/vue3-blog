<template>
   <div class="blog-list">
      <el-card v-for="item in list" :key="item.id">
          <div class="blog-item">
            <h3>{{ item.title }}</h3>
          </div>
      </el-card>
   </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  list: {
    require: true,
    type: Array
  }
})
</script>
<style lang="scss" scoped>
.blog-list {
    .blog-item {
      height: 180px;
    }
}
</style>
