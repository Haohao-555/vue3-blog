<template>
    <div class="time">
      <el-card>
        <div class="time-container">
          <div class="title" style="display: flex;">⏰ <beat-text text="我的微信公众号"></beat-text></div>
          <div class="content">
            <div class="wetchat"></div>
          </div>
        </div>
      </el-card>
  </div>
</template>
<script setup>
import BeatText from '@/components/BeatText'

</script>
<style lang="scss" scoped>
.wetchat {
  margin-top: 12px;
  border-radius: 6px;
  width: 227px;
  height: 81px;
  background-image: url('~@/assets/wechat.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
