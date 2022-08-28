<!--
 * @Date: 2022-07-23 15:32:15
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog-1\src\layout\index.vue
-->
<template>
   <div class="layout" :class="{'isoverhidden': $store.getters.showAside}">
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
      <div class="mask" @click.self="close()" :class="{'show': $store.getters.showAside}">
          <modile-asside></modile-asside>
      </div>
   </div>
</template>
<script setup>
import NavHeader from '@/components/NavHeader/index'
import ModileAsside from '@/components/ModileAsside/index'
import { useStore } from 'vuex'
const store = useStore()

const close = () => {
  store.commit('modile/changeAsideShow', false)
}
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
  @media screen and (min-width: 970px) {
    background-image: url('http://39.104.61.32/imgHome/blog/bg(1).jpg');
    background-position: center bottom;
  }
  @media screen and (max-width: 750px) {
    background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);
    background-position: center bottom;
  }
  .drop-down {
    @media screen and (min-width: 970px) {
      position: fixed;
      right: 5px;
      top: -600px;
      width: 70px;
      height: 900px;
      background-image: url('~@/assets/1.png');
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  .mask {
     position: absolute;
     top: 0;
     left: 100%;
     width: 100%;
     height: 100vh;
     background: transparent;
     transition: left .5s;
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
