<template>
  <div class="about">
    <el-main>
      <el-row justify="center">
        <el-col :lg="18" :md="24" :sm="24" :xs="24">
           <banner></banner>
           <el-card>
             <div class="about-title" style="text-align: center">Hi 👋 欢迎光临</div>
             <el-row justify="center">
                <el-col :lg="22" :md="24" :sm="24" :xs="24">
                  <div class="about-container">
                    <div class="session">
                      <div class="content">
                        <el-row justify="center">
                          <el-col :lg="24" :md="24" :sm="24" :xs="24">
                            <img class="github-img" src="https://ghchart.rshah.org/D65F00/Haohao-555" alt=""/>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                    <div class="session">
                      <div class="session-title">🔨 技能</div>
                      <div class="content">
                        <img src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="">
                        <img src="https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="">
                        <img src="https://img.shields.io/badge/-JavaScript-eed718?style=flat&logo=javascript&logoColor=ffffff" alt="">
                        <img src="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white" alt="">
                        <img src="https://img.shields.io/badge/-Jquery-587498?style=flat&logo=jquery&logoColor=white" alt="">
                        <br/>
                        <img src="https://img.shields.io/badge/-vue-978E43?style=flat" alt=""/>
                        <img src="https://img.shields.io/badge/-vuex-978E43?style=flat" alt=""/>
                        <img src="https://img.shields.io/badge/-vue--router-978E43?style=flat" alt=""/>
                        <img src="https://img.shields.io/badge/-element--plus-978E43?style=flat" alt=""/>
                        <br/>
                        <img src="https://img.shields.io/badge/-Node.js-3C873A?style=flat&logo=Node.js&logoColor=white" alt="">
                        <img src="https://img.shields.io/badge/-Express.js-787878?style=flat" alt="">
                        <img src="https://img.shields.io/badge/-koa2.js-bea32e?style=flat" alt="">
                        <br/>
                        <img src="https://img.shields.io/badge/-highcharts-F1502F?style=flat&logo=highcharts&logoColor=FFFFFF" alt="">
                        <br/>
                        <img src="https://img.shields.io/badge/-Electron-f49452?style=flat" alt="">
                        <img src="https://img.shields.io/badge/-nw--webkit-3e6a45?style=flat" alt="">
                        <br/>
                        <img src="https://img.shields.io/badge/-Git-F1502F?style=flat&logo=git&logoColor=FFFFFF" alt="">
                        <img src="https://img.shields.io/badge/-Github-000000?style=flat&logo=github&logoColor=FFFFFF" alt="">
                        <img src="https://img.shields.io/badge/-VS%20Code-007ACC?style=flat&logo=visual%20studio%20code&logoColor=white" alt="">
                        <img src="https://img.shields.io/badge/-ApiPost6-3e6a45?style=flat" alt="">
                      </div>
                    </div>
                    <div class="session">
                      <div class="session-title">✍🏻 正在学习的技能</div>
                      <div class="content">
                         <img src="https://img.shields.io/badge/-React-3e6a45?style=flat" alt="">
                      </div>
                    </div>
                    <div class="session">
                      <div class="session-title">🧔🏻 摸鱼</div>
                      <div class="content">
                        <img src="https://img.shields.io/badge/CSDN-https://blog.csdn.net/weixin_44659458-blue?style=flat-square&logo=CSDN" alt="">
                        <br/>
                        <img src="https://img.shields.io/badge/Github-https://github.com/Haohao-555?style=flat-square&logo=github" alt="">
                      </div>
                    </div>
                    <div class="session">
                      <div class="session-title">🤝🏻 联系我</div>
                      <div class="content">
                        <img src="https://img.shields.io/badge/Email-3283627490@qq.com-blue?style=flat-square&logo=gmail" alt="">
                        <br/>
                        <img src="https://img.shields.io/badge/WeChat-HJH3283627490-blue?style=flat-square&logo=WeChat" alt="">
                      </div>
                    </div>
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
</script>
<style lang="scss" scoped>
.about {
  .about-title {
    font-weight: bolder;
  }
  .about-container {
    .session {
      margin-bottom: 24px;
      .session-title {
        font-weight: bolder;
      }
      .content {
        padding-top: 20px;
        .github-img {
          display: block;
          width: 100%;
        }
        img {
          margin: 3px 3px;
        }
      }
    }

  }
}
</style>
