<!--
 * @Date: 2022-08-13 10:24:33
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog-1\src\views\blog\component\NavAside\component\QuotesItem.vue
-->
<template>
  <div class="quotes">
      <el-card>
        <div class="quotes-container">
          <div class="title" style="display: flex;">☕ <beat-text text="鸡汤"></beat-text></div>
          <div class="content">待填充</div>
        </div>
      </el-card>
  </div>
</template>
<script setup>
import {} from 'vue'
import BeatText from '@/components/BeatText'
</script>
<style lang="scss" scoped>
.quotes {
  .quotes-container {
    .title {
      font-weight: bold;
      padding-bottom: 12px;
    }
  }
}
</style>
