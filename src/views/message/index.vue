<template>
  <div class="message">
    <el-main class="message-bg">
      <div class="container"></div>
    </el-main>
  </div>
</template>
<script setup>
import {} from 'vue'
</script>
<style lang="scss" scoped>
.message {
  min-height: 100%;
  .message-bg {
    @media screen and (min-width: 970px) {
      background-image: url('http://39.104.61.32/imgHome/blog/bg(3).jpg');
      background-position: center bottom;
    }
    @media screen and (max-width: 750px) {
      background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
      background-image: url('http://39.104.61.32/imgHome/blog/mobile-bg.jpg');
      background-position: center bottom;
    }
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100%;
    background-attachment: fixed;
    .container {
      height: 100vh;
    }
  }
}
</style>
