<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-10-02 12:39:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-17 16:21:12
 * @FilePath: \yl-admin\src\layouts\components\mainPages\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import EmptyBlock from "./components/EmptyBlock.vue";
</script>

<template>
  <el-main>
    <router-view v-slot="{ Component, route }">
      <template v-if="!route.meta?.iframe_link">
        <Transition appear name="el-fade-in-linear">
          <EmptyBlock>
            <keep-alive>
              <component :is="Component" v-if="route.meta?.keepAlive" />
            </keep-alive>
            <component :is="Component" v-if="!route.meta.keepAlive" />
          </EmptyBlock>
        </Transition>
      </template>
      <template v-else>
        <Transition appear name="el-fade-in-linear">
          <EmptyBlock>
            <iframe
              class="iframe w-full h-full"
              :src="route.meta?.iframe_link"
              frameborder="0"
            ></iframe>
          </EmptyBlock>
        </Transition>
      </template>
    </router-view>
  </el-main>
</template>

<style lang="scss" scoped>
.el-main {
  padding: 5px;
}
</style>
