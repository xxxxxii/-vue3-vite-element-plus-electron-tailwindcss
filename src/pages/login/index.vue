<!--
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-09-11 17:47:25
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-05 14:04:25
 * @FilePath: \vue3vite\src\pages\login\index.vue
 * @Description:
 *
 * Copyright (c) 2022 by yulinZ 1973329248@qq.com, All Rights Reserved.
-->
<template>
  <div
    class="login-register bg-green-400"
    :class="{ 'sign-up-mode': signUpMode }"
  >
    <!-- form表单容器 -->

    <div
      class="bg"
      :class="{ 'bg-right': inAnimation, 'bg-left': !inAnimation }"
    ></div>
    <div
      class="relative main-box z-50 grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 w-screen-sm md:py-16 max-w-4xl rounded-lg"
    >
      <div
        class="z-50 from-box"
        :class="{
          'move-right mr-8 ': inAnimation,
          'move-left ml-8': !inAnimation,
        }"
      >
        <div class="from-content h-full shadow-2xl rounded-lg">
          <LoginForm
            v-show="!inAnimation"
            :login-user="loginUser"
            :rules="rules"
          />
          <RegisterForm
            v-show="inAnimation"
            :register-user="registerUser"
            :register-rules="registerRules"
          />
        </div>
      </div>

      <div class="img-box">
        <div class="relative w-full grid grid-cols-1 grid-rows-2">
          <div class="relative row-span-2 md:col-span-2 w-full h-full">
            <img
              src="@/assets/img/login.svg"
              alt=""
              class="img inset-0 w-full h-full object-cover bg-dark sm:rounded-lg"
            />
          </div>
          <div class="absolute w-full flex justify-center">
            <button class="btn" v-show="inAnimation" @click="toregist">
              登陆
            </button>
          </div>
        </div>
      </div>
      <div class="img-box">
        <div class="relative w-full grid grid-cols-1 grid-rows-2">
          <div class="relative row-span-2 md:col-span-2 w-full h-full">
            <img
              src="@/assets/img/register.svg"
              alt=""
              class="img inset-0 w-full h-full object-cover bg-dark sm:rounded-lg"
            />
          </div>
          <div class="absolute w-full flex justify-center">
            <button class="btn" v-show="!inAnimation" @click="toregist">
              注册
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 左右切换动画 -->
  </div>
</template>
<script setup>
import { ref, reactive, watch } from "vue";
import { LoginForm, RegisterForm } from "./components";
import { registerRules } from "./components/registerValidators";

const isShow = ref(false);
const loginUser = ref({
  username: "admin",
  password: "123456",
});

const registerUser = ref({
  name: "",
  email: "",
  password: "",
  passwordEnter: "",
  role: "",
});
const rules = reactive({
  username: [
    {
      required: true,
      type: "name",
      message: "请输入正确的账号",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur,change",
    },
    {
      min: 6,
      max: 30,
      message: "密码长度6~30字符~~",
      trigger: "blur",
    },
  ],
});

const signUpMode = ref(false);
const inAnimation = ref(false);
const delayShow = () => {
  setTimeout(() => {
    isShow.value = !isShow.value;
  }, 700);
};
watch(signUpMode, () => {
  delayShow();
});

const toregist = () => {
  inAnimation.value = !inAnimation.value;
  isShow.value = !isShow.value;
};
</script>

<style scoped>
.login-register {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.bg {
  position: fixed;
  height: 2000px;
  width: 2000px;
  border-radius: 50%;
  z-index: 6;
  overflow: hidden;
}

.bg-left {
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #00caab 0%, #67e7d4 100%);
  transition: 1.8s ease-in-out;
}
.bg-right {
  top: 160%;
  right: -75%;
  transform: translateY(-75%);
  background-image: linear-gradient(-45deg, #00caab 0%, #67e7d4 100%);
  transition: 1.8s ease-in-out;
}
.from-box {
  /* left: 10%; */
  width: 352px;
  position: absolute;
  /* width: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10%;
  bottom: -10%;
}
.main-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-box {
  flex: 1;
  font-size: 16px;
}

.img {
  height: 16em;
  width: 22em;
}
.move-right {
  animation: moveRight 0.6s linear forwards;
}
.move-left {
  animation: moveLeft 0.6s linear forwards;
}
@keyframes moveRight {
  0% {
    right: 50%;
  }
  100% {
    right: 0;
  }
}
@keyframes moveLeft {
  0% {
    left: 50%;
  }
  100% {
    left: 0%;
  }
}
.from-box > .from-content {
  width: 352px;
  /* background: #000; */
  display: flex;
  align-items: center;
}

@media (max-width: 640px) {
  .img-box {
    display: none;
  }
  .from-box {
    width: 90%;
    position: sticky;
    padding: 0;
    margin: 0;
  }
  .loginForm,
  .registerForm {
    padding: 2rem 5px;
  }
}

.container {
  /* position: relative; */
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 55%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 44%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

/* 左右切换动画 */
.btn {
  width: 150px;
  background-color: #00caab;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background-color: #67e7d4;
}

.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #00caab 0%, #67e7d4 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

@media (max-width: 870px) {
}

@media (max-width: 570px) {
}

form {
  /* margin: 0rem 5rem; */
  transition: all 0.2s 0.7s;
  /* animation: go 0.7s ease 0s 1; */
  overflow: hidden;
}
</style>
