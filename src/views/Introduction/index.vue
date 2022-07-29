<template>
   <div class="index">
      <el-main class="main">
        <!--  -->
        <div class="banner">
          <el-main class="banner-img"></el-main>
        </div>
        <!-- 关于我 -->
        <div class="session">
            <div class="session-container">
              <el-row justify="center">
                <el-col :span="20">
                   <el-row gutter="20">
                      <el-col :lg="8" :md="8" :sm="24" :xs="24">
                          <div class="about-me"></div>
                      </el-col>
                      <el-col :lg="16" :md="16" :sm="24" :xs="24">
                        <div class="about-content">
                          <div class="about-text">不知道写啥，就这样吧！</div>
                        </div>
                      </el-col>
                   </el-row>
                </el-col>
            </el-row>
            </div>
        </div>
        <el-row>
          <el-col :span="24" class="a1-img"></el-col>
        </el-row>
        <div class="session">
            <el-row>
              <el-col :span="24">
                 <div class="session-container">
                    <h1>网站介绍</h1>
                    <div class="site-content">还没实现呢！等着。。。。。</div>
                 </div>
              </el-col>
            </el-row>
        </div>
        <div style="height: 300px;"></div>
      </el-main>
      <nav-footer></nav-footer>
   </div>
</template>
<script setup>
import NavFooter from '@/components/NavFooter/index'
</script>
<style lang="scss" scoped>
::v-deep .el-main {
  padding: 0;
}
.index {
  .main {
     .banner {
      .banner-img {
        height: 560px;
        background-image: url('~@/assets/img/2.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
      }
     }
     .session {
        .session-container {
          background-color: #fff;
          .about-me {
            margin-top: 12px;
            background-image: url('~@/assets/img/3.jpg');
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            height: 300px;
          }
          h1 {
            text-align: center;
            padding-top: 40px;
            box-sizing: border-box;
          }
          .about-content {
              height: 200px;
              padding-top: 20px;
              .ava {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                overflow: hidden;
                margin: auto;
                img {
                  width: 100px;
                  height: 100px;
                }
              }
              .about-text {
                  // text-align: center;
                  margin-top: 12px;
              }
          }
          .site-content {
             text-align: center;
            margin-top: 12px;
          }
        }
     }
  }
}
.a1-img {
  width: 100%;
  height: 200px;
  background-image: url("~@/assets/img/1.png");
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}
</style>
