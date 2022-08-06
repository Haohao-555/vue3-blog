<template>
   <div class="layout">
      <div class="layout-container">
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
  overflow-x: hidden;
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
}
</style>
