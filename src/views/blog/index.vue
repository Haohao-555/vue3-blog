<template>
  <div class="blog">
    <el-main class="blog-bg">
      <div class="blog-container">
        <el-row justify="center">
          <el-col :lg="18" :md="24" :sm="24" :xs="24">
            <banner />
          </el-col>
          <el-col :lg="18" :md="24" :sm="24" :xs="24">
            <el-row :gutter="20">
              <el-col :md="18">
                <div class="wrapper">
                  <!-- <tools-item></tools-item> -->
                  <blog-list :list="list" />
                  <div class="pagination">
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      :page-size="4"
                      @current-change="blogChangePage"
                      :total="total"
                    />
                  </div>
                </div>
              </el-col>
              <el-col :md="6" style="position: relative; top: 0px">
                <nav-aside />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import BlogList from './component/BlogList/index'
import NavAside from './component/NavAside/index'
// import ToolsItem from '@/components/ToolsItem/index'
import Banner from '@/components/Banner/index'
import { getblogList } from '@/api/blog'
const list = ref([])
const total = ref(0)
const getBlog = (config = {}) => {
  const { size = 4, page = 0 } = config
  getblogList({ size, page }).then((res) => {
    list.value = res.blogList
    total.value = res.count
  })
}
const blogChangePage = (page) => {
  getBlog({ page })
}
onMounted(() => {
  getBlog()
})
</script>
<style lang="scss" scoped>
::v-deep .el-card {
  margin-bottom: 12px;
}
.pagination {
  display: flex;
  justify-content: center;
  padding-bottom: 12px;
}
</style>
