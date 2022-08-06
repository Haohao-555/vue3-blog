<template>
  <div class="message">
    <el-main class="message-bg">
      <el-row justify="center">
        <el-col :lg="18" :md="24" :sm="24" :xs="24">
           <banner></banner>
           <el-card>
             <div class="message-container">
                <comment></comment>
                <comment-list :list="list"></comment-list>
             </div>
           </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Comment from '@/components/Comment/index'
import CommentList from '@/components/CommentList/index'
import Banner from '@/components/Banner/index'
const list = ref([])

const getCommentList = () => {
  list.value = [
    {
      id: 1,
      nickName: '浩浩',
      time: '2022-08-05',
      content: '真棒！！！',
      ava: 'https://i.loli.net/2021/07/25/B7uKGgRdVXp8L3N.jpg',
      reply: [
        {
          id: 2,
          nickName: 'haohao',
          time: '2022-08-05',
          content: '真棒！！！',
          ava: 'https://i.loli.net/2021/07/25/B7uKGgRdVXp8L3N.jpg'
        }
      ]
    },
    {
      id: 1,
      nickName: '浩浩',
      time: '2022-08-05',
      content: '真棒！！！',
      ava: 'https://i.loli.net/2021/07/25/B7uKGgRdVXp8L3N.jpg',
      reply: [
        {
          id: 2,
          nickName: 'haohao',
          time: '2022-08-05',
          content: '真棒！！！',
          ava: 'https://i.loli.net/2021/07/25/B7uKGgRdVXp8L3N.jpg'
        }
      ]
    },
    {
      id: 2,
      nickName: '浩浩',
      time: '2022-08-05',
      content: '真棒！！！',
      ava: 'https://i.loli.net/2021/07/25/B7uKGgRdVXp8L3N.jpg',
      reply: [
        {
          id: 2,
          nickName: 'haohao',
          time: '2022-08-05',
          content: '真棒！！！',
          ava: 'https://i.loli.net/2021/07/25/B7uKGgRdVXp8L3N.jpg'
        }
      ]
    },
    {
      id: 3,
      nickName: '浩浩',
      time: '2022-08-05',
      content: '真棒！！！',
      ava: 'https://i.loli.net/2021/07/25/B7uKGgRdVXp8L3N.jpg',
      reply: [
        {
          id: 2,
          nickName: 'haohao',
          time: '2022-08-05',
          content: '真棒！！！',
          ava: 'https://i.loli.net/2021/07/25/B7uKGgRdVXp8L3N.jpg'
        }
      ]
    }
  ]
}
onMounted(() => {
  getCommentList()
})
</script>
<style lang="scss" scoped>
.message {
  min-height: 100%;
  ::v-deep .el-card {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 12px 8px 8px 12px;
    border: rgba(255, 255, 255, 0.5);
  }
  .message-bg {
    .message-container {
      height: 1000px;
    }
  }
}
</style>
