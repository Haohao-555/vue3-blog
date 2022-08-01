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
        background-image: url('http://39.104.61.32/imgHome/blog/bg(3).jpg');
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        min-height: 100%;
        background-attachment: fixed;
        .container {
          height: 100vh;
        }
    }
   }
</style>
