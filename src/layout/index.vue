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
}
</style>
