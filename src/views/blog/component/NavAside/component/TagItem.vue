<template>
   <div class="tag-item">
    <el-card>
      <span class="title">标签云</span>
      <div class="container">
        <el-tag v-for="item in tagList" :key="item" type="warning">{{ item }}</el-tag>
      </div>
    </el-card>
   </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  tagList: {
    type: Array
  }
})
</script>
<style lang="scss" scoped>
::v-deep .el-tag {
  margin-right: 6px;
  margin-bottom: 6px;
}
.tag-item {
  .title {
    font-weight: 600;
  }
  .container {
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
