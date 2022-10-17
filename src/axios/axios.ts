import Axios from "axios";
import { ElMessage } from "element-plus";
import qs from "qs";
import { useRouter } from "vue-router";
// import router from '../router'
// import store from '../store/modules/user'

const defaultConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
};

Axios.defaults = defaultConfig;
// 封装的http 请求
export const http = (url: string, method: string, param: any) => {
  if (method == "post" || method == "POST") {
    // window.$loadingBar.start()
    console.log(defaultConfig.baseURL + url);
    return Axios({
      method,
      url: defaultConfig.baseURL + url,
      data: param,
    })
      .then((res) => {
        // window.$loadingBar.finish()
        console.log(url);
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
  if (method == "get" || method == "GET") {
    // window.$loadingBar.start()
    console.log(defaultConfig.baseURL + url);
    return Axios({
      method: method,
      url: defaultConfig.baseURL + url + `?${qs.stringify(param)}`,
    })
      .then((res) => {
        // window.$loadingBar.finish()
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
};
// 请求拦截器
Axios.interceptors.request.use(
  (config) => {
    // window.$loadingBar.start()
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // console.log(store.state.token)
    // const token = store.state.token
    // "Bearer 1eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJhZG1pbiIsImlkIjoxfSwidHlwZSI6ImV4cHJlc3Mtand0IiwiY3RpbWUiOjE2NDY3OTQzODUyNjgsImlhdCI6MTY0Njc5NDM4NSwiZXhwIjoxNjQ2ODgwNzg1fQ.HOksx5QcFahDICx1ue9m3U01jQpi7G151i6J8QfBgPE"
    const token =
      sessionStorage.getItem("token") ||
      "$2a$10$.nXOMg1jOcxlwQn3BwUijO7JhRF8dYJtqNDgrAGBw6GFdo291tcOS";
    config.headers["app-token"] = token;
    return config;
  },
  (error) => {
    return Promise.error(error);
  }
);

// 响应拦截器
Axios.interceptors.response.use(
  (response) => {
    const { data } = response;
    console.log(response, data);
    if (data.code === 200) {
      // if (data.code == 901) {
      //   ElMessageBox.confirm("你的会话已过期,请重新登录!", "Warning", {
      //     confirmButtonText: "OK",
      //     cancelButtonText: "Cancel",
      //     type: "warning",
      //   })
      //     .then(() => {
      //       router.push({
      //         path: "/login",
      //         query: { redirect: router.currentRoute.fullPath },
      //       });
      //     })
      //     .catch(() => {
      //       ElMessage({
      //         type: "info",
      //         message: "会话已过期",
      //       });
      //     });
      // } else {
      return data;
      // }
    } else {
      ElMessage.error(data.msg);
      return Promise.reject(new Error(data.msg));
    }
  },
  // 服务器状态码不是200的情况
  (error) => {
    console.log(error);
    if (error.response.status && "status" in error.response) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          console.log("token over");
          const router = useRouter();
          router.replace({
            path: "/login",
            query: { redirect: router.currentRoute.fullPath },
          });
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          console.log("token over");
          ElMessage.error("登录过期，请重新登录");

          // 清除token
          localStorage.removeItem("token");
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: "/login",
              query: {
                redirect: router.currentRoute.fullPath,
              },
            });
          }, 1000);
          break;
        // 404请求不存在
        case 404:
          ElMessage.error("网络请求不存在");
          break;
        // 其他错误，直接抛出错误提示
        default:
          ElMessage.error(error.response.data.msg);
      }
      return Promise.reject(error.response);
    } else {
      return Promise.reject({
        msg: "net error",
      });
    }
  }
);
