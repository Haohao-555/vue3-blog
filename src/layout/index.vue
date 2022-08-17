<template>
   <div class="layout">
      <div class="layout-container">
        <div class="drop-down"></div>
        <nav-header></nav-header>
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive>
              <component :is="Component" :key="route.path"></component>
            </keep-alive>
          </transition>
        </router-view>
      </div>
   </div>
</template>
<script setup>
import NavHeader from '@/components/NavHeader/index'
</script>
<style lang="scss" scoped>

.layout {
  //cursor: url("https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ac1d8cb2b1b46a384e986a7461df26a~tplv-k3u1fbpfcp-watermark.image?"), auto;
  overflow-x: hidden;
  position: relative;
  @media screen and (min-width: 970px) {
    background-image: url('http://39.104.61.32/imgHome/blog/bg(1).jpg');
    background-position: center bottom;
  }
  @media screen and (max-width: 750px) {
    background-image: url('http://39.104.61.32/imgHome/blog/mobile-bg.jpg');
    background-position: center bottom;
  }
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
  background-attachment: fixed;
  .drop-down {
    @media screen and (min-width: 970px) {
        position: fixed;
        right: 60px;
        top: -600px;
        width: 70px;
        height: 900px;
        background-image: url('~@/assets/1.png');
        background-repeat: no-repeat;
        background-size: contain;
    }
  }
}
</style>
