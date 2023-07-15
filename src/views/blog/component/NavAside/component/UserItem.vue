<template>
  <div class="userInfo">
    <el-card>
      <div class="user-item">
        <div class="ava">
          <el-image
            style="width: 100px; height: 100px"
            :src="info.avaUrl"
            :fit="fit"
          />
        </div>
        <div class="nickName">{{ info.nickName }}</div>
        <div class="signature">{{ info.signature }}</div>
        <div class="link-list">
          <el-check-tag
            v-for="item in info.linkList"
            :key="item"
            @change="goLink(item.link)"
          >
            {{ item.text }}
          </el-check-tag>
        </div>
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
const goLink = (link) => {
  if (link) {
    window.open(link, '_blank')
  }
}
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
    font-size: 20px;
    &:hover {
      color: var(--el-color-primary);
    }
  }
  .signature {
    margin-top: 12px;
    font-size: 12px;
    cursor: pointer;
  }
  .link-list {
    padding-top: 20px;
  }
}
</style>
