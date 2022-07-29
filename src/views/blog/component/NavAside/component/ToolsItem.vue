<template>
  <div class="tools-item">
      <el-card>
        <div class="tools-container">
          <span class="title">帅哥美女们，看过来！👏</span>
          <div class="content">{{ announce.content }}</div>

          <div class="content-img">
            <el-row justify="center">
              <el-col :span="24">
                <el-image style="border-radius:12px;" :src="announce.img" :fit="fit" />
              </el-col>
            </el-row>
          </div>
        </div>
      </el-card>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  announce: {
    require: true,
    type: Object
  }
})
</script>
<style lang="scss" scoped>
  .tools-item {
     .tools-container {
      .title {
        font-weight: 600;
      }
      .content {
        margin-top: 12px;
      }
      .content-img {
        margin-top: 12px;
      }
     }
  }
</style>
