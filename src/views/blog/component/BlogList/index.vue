<template>
   <div class="blog-list">
      <el-card v-for="item in list" :key="item.id">
          <blog-item :blog="item"></blog-item>
      </el-card>
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
::v-deep .el-card .el-card__body {
  padding: 0px;
}
.blog-list {

}
</style>
