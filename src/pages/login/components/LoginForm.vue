<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-16 21:52:02
 * @FilePath: \vue3vite\src\pages\login\components\LoginForm.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved. 
-->
<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    class="loginForm w-full sign-in-form"
  >
    <el-form-item prop="username">
      <el-input
        class="from-input"
        v-model="loginUser.username"
        placeholder="账号..."
      >
        <template #prefix>
          <el-icon class="el-input__icon">
            <!-- <IEpUserFilled></IEpUserFilled> -->
            <User />
          </el-icon> </template
      ></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        class="from-input"
        v-model="loginUser.password"
        type="password"
        placeholder="密码..."
      >
        <template #prefix>
          <el-icon class="el-input__icon">
            <!-- <IAntDesignLockFilled /> -->
            <Lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>
    <!-- <el-form-item prop="code">
      <el-row>
        <el-col :span="12">
          <el-input v-model="loginUser.imgCode" placeholder="请输入验证码">
            <template #prefix>
              <el-icon class="el-input__icon">
                <IEpUnlock />
              </el-icon>
            </template>
          </el-input>
        </el-col>
        <el-col :span="12">
          <div class="ml-2 mr-2">
            <image-verify ref="verifyRef" />
          </div>
        </el-col>
      </el-row>
    </el-form-item> -->
    <el-form-item>
      <el-button
        @click="handleLogin(loginForm)"
        type="primary"
        class="submit-btn"
        >登录</el-button
      >
    </el-form-item>
    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a>立即找回</a></p>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

import _ from "lodash";
// import ImageVerify from "@/components/ImageVerify/index.vue";
import userServe from "@/hooks/useUsers";
import type { FormInstance, FormRules } from "element-plus";
// import { login } from '../../serve/api';

const verifyRef = ref(null);
const loginForm = ref(null);
const props = defineProps({
  loginUser: {
    type: Object,
    required: true,
  },
  rules: {
    type: Object,
    required: true,
  },
});

//节流
const handleLogin = async (formEl: FormInstance | undefined) => {
  await _.throttle(function filterTags() {
    if (!formEl) return;
    formEl.validate((valid, fields) => {
      if (valid) {
        // if (verifyRef.value.imgCode != props.loginUser.imgCode?.toUpperCase()) {
        //   ElMessage({
        //     message: "请正确输入验证码！",
        //     type: "warning",
        //   });
        //   return;
        // }
        toLogin();
      } else {
        console.log("error submit!", fields);
      }
    });
  }, 2000).call(this);
};

function toLogin() {
  userServe.login(props.loginUser);
}
</script>
<style scoped>
.loginForm {
  padding: 2rem;
}
.from-input {
  width: 100%;
}

.submit-btn {
  width: 100%;
}

.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}

.tiparea p a {
  color: var(--main-color);
}
</style>
