<template>
  <div class="blog-content">
    <el-main>
      <el-row justify="center">
        <el-col :lg="18" :md="24" :sm="24" :xs="24">
          <el-row :gutter="24">
            <el-col :md="24">
              <div class="blog-wraper">
                <el-card class="blog-container">
                  <!-- <div class="bg"></div>
                  <div class="title"></div> -->
                  <div class="content" v-html="content"></div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getblogContent } from '@/api/blog'
const route = useRoute()

const content = ref(null)

const getContent = () => {
  getblogContent({ id: route.query.id }).then((res) => {
    content.value = res.content
    console.log(content.value)
  })
}
onMounted(() => {
  getContent()
})
</script>
<style lang="scss" scoped>
.blog-wraper {
  .el-card {
  }
}

.blog-container {
  .bg {
  }

  .title {
  }

  .content {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      display: flex;
      align-items: center;
      margin: 30px 0;
      position: relative;
      padding: 4px 32px;
      width: max-content;
      color: var(--el-color-primary);

      &:before {
        content: '';
        display: inline-block;
        width: 4px;
        height: 40px;
        background-color: var(--el-color-primary);
      }
    }
  }
}
</style>
