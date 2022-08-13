<template>
   <div class="music">
    <div class="session">
      <h3 class="title">
        云音乐全栈小程序
        <span>2022-07</span>
      </h3>
      <h4>后台系统</h4>
      <div class="container">
        <slide-show :list="imgList"></slide-show>
      </div>
    </div>
   </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import SlideShow from '@/components/SlideShow'
const imgList = ref([])
const getImgList = () => {
  imgList.value = [
    'https://i.loli.net/2021/07/11/O9YVM2eHjWmulnt.png',
    'https://i.loli.net/2021/07/11/lHxuWBPKZTANFSR.png',
    'https://i.loli.net/2021/07/11/wbdo8F5auc62lNO.png'
  ]
}

onMounted(() => {
  getImgList()
})
</script>
<style  lang="scss" scoped>
.session {
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>
