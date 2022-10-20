<script setup lang="ts">
import PanelGroup from "./components/PanelGroup.vue";
// import { Echart } from "@/components/Echart";
import { pieOptions, barOptions, lineOptions } from "./echarts-data";
import { ref, reactive } from "vue";

import { set } from "lodash";
import { EChartsOption } from "echarts";

const { t } = useI18n();

const loading = ref(true);
loading.value = false;

// 用户来源

const data = ref([
  {
    name: "Github",
    icon: IAntDesignGithubFilled,
    message: "workplace.introduction",
    personal: "Archer",
    time: "2022-10-19T10:37:05.498Z",
  },
  {
    name: "Vue",
    icon: ILogosVue,
    message: "workplace.introduction",
    personal: "Archer",
    time: "2022-10-19T10:37:05.498Z",
  },
  {
    name: "Angular",
    icon: ILogosAngular,
    message: "workplace.introduction",
    personal: "Archer",
    time: "2022-10-19T10:37:05.498Z",
  },
  {
    name: "React",
    icon: ILogosReact,
    message: "workplace.introduction",
    personal: "Archer",
    time: "2022-10-19T10:37:05.498Z",
  },
  {
    name: "Webpack",
    icon: ILogosWebpack,
    message: "workplace.introduction",
    personal: "Archer",
    time: "2022-10-19T10:37:05.498Z",
  },
  {
    name: "Vite",
    icon: ILogosVitejs,
    message: "workplace.introduction",
    personal: "Archer",
    time: "2022-10-19T10:37:05.498Z",
  },
]);

const updataData = ref([
  {
    time: " 2022-8-29",
    name: "yulinZ",
    list: [
      "1. 登录页面更新（页面退出后重定向）",
      "2. nprogress 顶部路由跳转加载条（/src/progress/index.js 中配置）",
      "3.  nprogress 样式：全局样式可设置",
    ],
  },
  {
    time: "2022-9-23",
    name: "yulinZ",
    list: [
      "1. 增加了 electron 支持 可以 编译桌面端，可以热更新，yarn electron:serve 运行服务，默认运行在 3000 端口，如需修改，在 env.development VITE_PORT = 3000 ,package.json 中 scripts -> electron: wait-on tcp:3000 && electron . 自行修改端口即可。",
      "2. 修复页面暗色模式下，颜色色差问题。",
    ],
  },
  {
    time: "2022-9-26",
    name: "yulinZ",
    list: [
      "1. 完善 electron 打包配置，执行打包命令自动生成各种图标，在 dist_electron/build 文件夹下，可以自行设置，修改 package.json ->scripts->electron:generate-icons 即可",
      "1. 优化菜单 之前只能使用 element plus 的图标库，而且是全部引入的 element 图标，目前自动引入图标，可以使用更多的图标， https://icones.netlify.app/ 网站上的图标都可使用",
    ],
  },
  {
    time: "2022-10-06",
    name: "yulinZ",
    list: ["1. 更新文件统一类型", "2. 更新项目 logo", "3. 去除多余代码"],
  },
]);

// 每月销售总额
</script>

<template>
  <!-- <PanelGroup /> -->
  <ElRow :gutter="20" justify="space-between">
    <ElCol :xl="10" :lg="10" :md="24" :sm="24" :xs="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated>
          <el-row :gutter="12">
            <el-col :span="12" v-for="item in data">
              <el-card shadow="hover">
                <div style="padding: 5px">
                  <el-icon :size="48">
                    <component :is="item.icon"></component>
                  </el-icon>
                  <div>{{ item.name }}</div>
                  <div class="bottom">
                    <div>{{ item.personal }}</div>
                    <!-- <time class="time">{{ item.time }}</time> -->
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </ElSkeleton>
      </ElCard>
    </ElCol>
    <ElCol :xl="14" :lg="14" :md="24" :sm="24" :xs="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated>
          <h2>更新日志</h2>
          <el-card shadow="hover" v-for="item in updataData">
            <div style="display: flex; justify-content: space-between">
              <div>{{ item.time }}</div>
              <div>{{ item.name }}</div>
            </div>
            <ul>
              <li v-for="Litem in item.list">{{ Litem }}</li>
            </ul>
          </el-card>
        </ElSkeleton>
      </ElCard>
    </ElCol>
    <ElCol :span="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated :rows="4">
          <!-- <Echart :options="lineOptionsData" :height="350" /> -->
        </ElSkeleton>
      </ElCard>
    </ElCol>
  </ElRow>
</template>
