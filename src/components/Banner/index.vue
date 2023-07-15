<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-carousel :interval="5000">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <div class="banner-container" v-html="item.content" :style="item.style"></div>
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>
<script setup>
import { onMounted, ref } from 'vue'
const bannerList = ref([])
const getBanner = () => {
  bannerList.value = [
    {
      id: 1,
      content: `
        <div style='padding: 10px; display:flex;  justify-content: center; align-items: center;'>
         <h3>招商广告 1</h3>  
        <div>
      `,
      style: {
        height: '100%'
      }
    },
    {
      id: 2,
      content: `
        <div style='padding: 10px; display:flex;  justify-content: center; align-items: center;'>
         <h3>招商广告 2</h3>  
        <div>
      `,
      style: {
        height: '100%'
      }
    }
  ]
}
onMounted(() => {
  getBanner()
})
</script>
<style lang="scss" scoped>
.banner {
  height: max-content;
  margin-bottom: 12px;
}
::v-deep .el-carousel__container {
  @media screen and (min-width: 970px) {
    height: 300px !important;
  }
  @media screen and (max-width: 750px) {
    height: 200px !important;
  }
}
</style>
