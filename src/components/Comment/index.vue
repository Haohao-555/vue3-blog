<!--
 * @Date: 2022-08-06 10:37:23
 * @Author: 浩
 * @LastEditors: 浩
 * @FilePath: \vue3-blog-1\src\components\Comment\index.vue
-->
<template>
   <div class="comment">
     <div class="comment-input">
       <el-input type="textarea" placeholder="用尽一切奔向你" v-model="comment"/>
       <div class="option">
          <button @click="sumbit" class="btn">提交</button>
       </div>
     </div>
   </div>
</template>
<script setup>
import { ref } from 'vue'
const comment = ref('')
const sumbit = () => {
  console.log(comment.value)
}
</script>
<style lang="scss" scoped>
.comment {
  .comment-input {
    ::v-deep textarea {
      padding: 12px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.5);
      @media screen and (min-width: 992px) {
        height: 240px;
      }
      @media screen and (min-width: 769px) and (max-width: 992px) {
        height: 200px;
      }
      @media screen and (max-width: 768px) {
        height: 160px;
      }
    }
  }
  .option {
    margin-top: 12px;
    display: flex;
    justify-content: flex-end;
    .btn {
      width: 80px;
      height: 30px;
      border-radius: 6px;
      border: none;
      background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);
      color: #fff;
      opacity: 0.6;
    }
  }
}
</style>
