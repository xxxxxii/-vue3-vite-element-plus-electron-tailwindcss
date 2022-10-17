<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-05 13:53:17
 * @FilePath: \vue3vite\src\components\login\RegisterForm.vue
 * @Description:
 *
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved.
-->

<template>
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    label-width="0px"
    class="registerForm w-full sign-up-form"
  >
    <!-- <el-form ref="loginForm" :model="loginUser" :rules="rules" label-width="60px" class="loginForm sign-in-form"> -->
    <el-form-item label=" " prop="name">
      <el-input
        v-model="registerUser.name"
        class="from-input"
        placeholder="用户名..."
        autocomplete="new-password"
      />
    </el-form-item>
    <el-form-item label=" " prop="email">
      <el-input
        v-model="registerUser.email"
        class="from-input"
        placeholder="邮箱..."
      />
    </el-form-item>
    <el-form-item label=" " prop="password">
      <el-input
        v-model="registerUser.password"
        class="from-input"
        type="password"
        placeholder="密码..."
        autocomplete="new-password"
      />
    </el-form-item>
    <el-form-item label=" " prop="passwordEnter">
      <el-input
        v-model="registerUser.passwordEnter"
        class="from-input"
        type="password"
        placeholder="确认密码..."
      />
    </el-form-item>

    <el-form-item label=" ">
      <el-select
        v-model="registerUser.role"
        class="from-input"
        placeholder="请选择身份"
      >
        <el-option label="管理员" value="admin" />
        <el-option label="用户" value="user" />
        <el-option label="游客" value="visitor" />
      </el-select>
      <!-- <div style="width:120px; height: 2px;"></div> -->
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click="handleRegister(registerForm)"
        >注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
// import axios from 'axios' // 仅限在当前组件使用
import { cloneDeep } from "lodash-es";

const props = defineProps({
  registerUser: {
    type: Object,
    required: true,
  },
  registerRules: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
:deep(.el-form-item__label) {
  padding: 0 !important;
}
.registerForm {
  padding: 2rem;
}
.from-input {
  width: 100%;
}
.submit-btn {
  width: 100%;
}
</style>
