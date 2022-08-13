<template>
   <div class="slide-container">
      <div class="img-list">
        <div class="img-item" v-for="(item, i) in list" :key="i">
          <el-col>
            <el-row :span="24">
                <img :src="item" alt="">
            </el-row>
          </el-col>
        </div>
      </div>
   </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  list: {
    type: Array,
    default: () => {
      return []
    }
  }
})
</script>
<style lang="scss" scoped>
.slide-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin: 12px auto;
  height: 378px;
  .img-list {
    position: absolute;
    // left: -984.5px;
    display: flex;
    height: 100%;
    .img-item {
      //  width: 100%;
       height: 100%;
       flex-shrink:0;
       flex-grow: 0;
       flex-basis: 100%;
       img {
        width: 100%;
        height: 100%;
       }
    }
  }
}
</style>
