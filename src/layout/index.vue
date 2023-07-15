<template>
  <div class="layout" :class="{ isoverhidden: $store.getters.showAside }">
    <div class="layout-container">
      <div class="drop-down"></div>
      <nav-header></nav-header>
      <el-scrollbar>
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <!-- <keep-alive> -->
            <component :is="Component" :key="route.path"></component>
            <!-- </keep-alive> -->
          </transition>
        </router-view>
      </el-scrollbar>
    </div>
  </div>
</template>
<script setup>
import NavHeader from '@/components/NavHeader/index'
</script>
<style lang="scss" scoped>
.isoverhidden {
  height: 100vh;
  overflow: hidden;
}
.layout {
  position: relative;
  overflow-x: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
  background-attachment: fixed;
  // .drop-down {
  //   @media screen and (min-width: 970px) {
  //     position: fixed;
  //     right: 5px;
  //     top: -600px;
  //     width: 70px;
  //     height: 900px;
  //     background-image: url('~@/assets/1.png');
  //     background-repeat: no-repeat;
  //     background-size: contain;
  //   }
  // }
  .mask {
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100vh;
    background: transparent;
    transition: left 0.5s;
    z-index: 999;
  }
  .show {
    left: 0px;
  }
  .aside {
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgba(255, 255, 255);
    width: 50%;
    height: 100vh;
  }
}
</style>
