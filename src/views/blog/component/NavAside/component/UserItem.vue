<template>
  <div class="userInfo">
      <el-card>
          <div class="user-item">
              <div class="ava">
                 <el-image style="width: 100px; height: 100px" :src="info.avaUrl" :fit="fit" />
              </div>
              <div class="nickName">{{ info.nickName }}</div>
              <div class="signature">{{ info.signature }}</div>
              <el-row justify="center">
                <el-col :span="20">
                  <div class="data">
                    <div>
                      <div class="data-text">文章</div>
                      <div class="num">{{ info.blogNum }}</div>
                    </div>
                    <div>
                      <div class="data-text">标签云</div>
                      <div class="num">{{ info.tagNum }}</div>
                    </div>
                    <div>
                      <div class="data-text">分类</div>
                      <div class="num">{{ info.classNum }}</div>
                    </div>
                   </div>
                </el-col>
              </el-row>
          </div>
      </el-card>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  info: {
    type: Object,
    require: true
  }
})
</script>
<style lang="scss" scoped>
.userInfo {
   text-align: center;
   .ava {
    ::v-deep .el-image {
      border-radius: 50%;
    }
   }
   .nickName {
    font-weight: 600;
    margin-top: 12px;
    cursor: pointer;
   }
   .signature {
    margin-top: 12px;
    cursor: pointer;
   }
   .data {
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
    .num {
      margin-top: 12px;
    }
   }
}
</style>
