<template>
    <div class="mobile-nav" @click="showAside()" :class="{'active': $store.getters.showAside}">
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

defineProps({
  routeList: {
    type: Array,
    default: () => {
      return []
    }
  }
})

const showAside = () => {
  store.commit('modile/changeAsideShow', true)
}
</script>
<style lang="scss" scoped>
.active {
  border-color: #c00000 !important;
  .row {
    background-color: #c00000 !important;
  }
}
.mobile-nav {
  width: 35px;
  height: 35px;
  border: 1px solid #333;
  border-radius: 6px;
  margin-top: 6px;
  margin-right: -15px;
  padding: 6px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .row {
    height: 1px;
    width: 100%;
    background-color: #333;
  }
}
</style>
