<!--
 * @Date: 2022-08-01 19:48:07
 * @Author: ζ΅©
 * @LastEditors: ζ΅©
 * @FilePath: \vue3-blog-1\src\components\ToolsItem\index.vue
-->
<template>
   <div class="tools-item">
     <el-card>
        <div class="tools-container">
          <div>π’</div>
          <div class="content">{{ toolsData.content }}</div>
        </div>
      </el-card>
   </div>
</template>
<script setup>
import { ref } from 'vue'

// θ·ειη₯
const toolsData = ref({})
const getToolsData = () => {
  toolsData.value = {
    content: 'θΏδΈη₯ιεε₯'
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
