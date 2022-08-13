<!--
 * @Date: 2022-07-24 09:41:20
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog-1\src\views\production\index.vue
-->
<template>
  <div class="about">
    <el-main>
      <el-row justify="center">
        <el-col :lg="18" :md="24" :sm="24" :xs="24">
           <banner></banner>
           <el-card>
             <el-row justify="center">
                <el-col :lg="22" :md="24" :sm="24" :xs="24">
                  <div class="about-container">
                    <!-- <music-item></music-item> -->
                  </div>
                </el-col>
             </el-row>
           </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<script setup>
import {} from 'vue'
import Banner from '@/components/Banner/index'
// import MusicItem from './component/MusicItem.vue'
</script>
<style lang="scss" scoped>

</style>
