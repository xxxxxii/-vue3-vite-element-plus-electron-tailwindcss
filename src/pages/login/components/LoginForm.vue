<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-20 18:03:35
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
        :loading="loading"
        @click="handleLogin(loginForm)"
        type="primary"
        class="submit-btn"
        >登录</el-button
      >
    </el-form-item>
    <!-- 找回密码 -->
    <div class="tiparea">
      <p>
        <span class="text-white dark:text-black">
          忘记密码？ <a>立即找回</a></span
        >
      </p>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

import _ from "lodash";
// import ImageVerify from "@/components/ImageVerify/index.vue";

import { FormInstance, FormRules } from "element-plus";
import { useUserStore } from "@/stores/useUser";
import pinia from "@/stores/store";
const userStore = useUserStore(pinia);

const router = useRouter();
const route = useRoute();

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

const loading = ref(false);
function toLogin() {
  // userServe.login(props.loginUser);
  userStore.login(props.loginUser).then(() => {
    console.log(route.query.redirect);
    router.push({ path: route.query.redirect || "/" });
    loading.value = true;
    ElNotification({
      type: "success",
      message: "登录成功",
      duration: 3600,
    });
  });
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
