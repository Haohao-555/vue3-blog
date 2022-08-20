<template>
  <div class="modile-aside">
    <el-scrollbar>
      <div class="container">
        <div class="user-info">
              <div class="ava">
                 <el-image style="width: 60px; height: 60px" :src="info.avaUrl" :fit="fit" />
              </div>
              <div class="nickName">{{ info.nickName }}</div>
              <div class="signature">{{ info.signature }}</div>
              <el-row justify="center">
                <el-col :span="20">
                  <div class="data">
                    <div>
                      <div class="data-text">文章</div>
                      <div class="num">{{ info.blogNum }}</div>
                    </div>
                    <div>
                      <div class="data-text">标签云</div>
                      <div class="num">{{ info.tagNum }}</div>
                    </div>
                    <div>
                      <div class="data-text">分类</div>
                      <div class="num">{{ info.classNum }}</div>
                    </div>
                   </div>
                </el-col>
              </el-row>
        </div>
        <div class="nav-list">
           <div class="nav" v-for="(item, i) in routeList" :key="i" :class="{'active': item.route == activeRouter ? true: false}" @click="routeTo(item)">{{item.text}}</div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const info = ref({
  avaUrl: 'https://i.loli.net/2021/07/25/B7uKGgRdVXp8L3N.jpg',
  nickName: '岁月可贵',
  signature: '用尽一切奔向你',
  blogNum: 100,
  tagNum: 10,
  classNum: 12
})
const routeList = ref([
  {
    route: '/index',
    text: '主页'
  },
  {
    route: '/blog',
    text: '博客'
  },
  {
    route: '/message',
    text: '留言板'
  },
  {
    route: '/production',
    text: '作品集'
  },
  {
    route: '/about',
    text: '关于我'
  }
])

const activeRouter = ref('/blog')
watch(
  () => router.currentRoute.value.path,
  val => {
    activeRouter.value = val
  },
  {
    immediate: true
  }
)

const routeTo = (item) => {
  store.commit('modile/changeAsideShow', false)
  router.push({
    path: item.route
  })
}
</script>
<style lang="scss" scoped>
.modile-aside {
  position: absolute;
  right: 0;
  top: 0;
  width: 65%;
  height: 100vh;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  .container {
    padding-top: 20px;
    .user-info {
      text-align: center;
      .ava {
        ::v-deep .el-image {
          border-radius: 50%;
        }
      }
      .nickName {
        font-weight: 600;
        margin-top: 12px;
        cursor: pointer;
      }
      .signature {
        margin-top: 12px;
        cursor: pointer;
      }
      .data {
        padding: 12px 0;
        display: flex;
        justify-content: space-between;
        .num {
          margin-top: 12px;
        }
      }
    }
    .nav-list {
      border-top: 1px solid #f5f5f5;
      padding: 12px 0px;
      text-align: center;
      .active {
         color: #c00000;
      }
      .nav {
        line-height: 20px;
        padding: 15px 12px;
      }
    }
  }
}
</style>
