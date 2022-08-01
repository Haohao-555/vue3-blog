<!--
 * @Date: 2022-08-01 19:48:07
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog-1\src\components\ToolsItem\index.vue
-->
<template>
   <div class="tools-item">
     <el-card>
        <div class="tools-container">
          <el-icon class="icon"><Microphone /></el-icon>
          <div class="content">{{ toolsData.content }}</div>
        </div>
      </el-card>
   </div>
</template>
<script setup>
import { ref } from 'vue'
import { Microphone } from '@element-plus/icons-vue'

// 获取通知
const toolsData = ref({})
const getToolsData = () => {
  toolsData.value = {
    content: '还不知道写啥'
  }
}
getToolsData()
</script>
<style lang="scss" scoped>
::v-deep .el-card {
  border-radius: 3px !important;
}
.tools-item {
  margin-bottom: 23px;
  .tools-container {
    display: flex;
    .icon {
      margin-top: 3px;
    }
    .content {
      margin-left: 12px;
      vertical-align: middle;
      font-size: 1em;
    }
  }
}
</style>
