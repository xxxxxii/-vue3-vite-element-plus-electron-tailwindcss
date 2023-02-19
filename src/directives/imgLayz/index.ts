/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2023-02-16 19:18:47
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2023-02-17 23:49:19
 * @FilePath: \-vue3-vite-element-plus-electron-tailwindcss\src\directives\imgLayz\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import deflultImg from "@/assets/loading.jpeg";

export default {
  install(app: any) {
    defaneDirective(app);
  },
};

const defaneDirective = (app: {
  directive: (
    arg0: string,
    arg1: { mounted(el: any, binding: any): void }
  ) => void;
}) => {
  app.directive("Imglazy", {
    mounted(el, binding) {
      const observer = new IntersectionObserver(
        (entry) => {
          console.log(entry);
          el.style.transition = "all 1s ease";
          if (entry[0].isIntersecting) {
            console.log(entry[0].isIntersecting);
            el.setAttribute("src", binding.value);
            el.style.transform = "";
            el.onerror = () => {
              el.src = deflultImg;
            };
            el.style.setProperty("transform", "scale(1)");
            //添加这个之后只执行一次,注释掉可以看到效果，推荐开启，可减少浏览器的负载，缓存图片
            observer.unobserve(el);
          } else {
            el.style.setProperty("transform", "scale(0.9)");
          }
        },
        {
          threshold: 0.5,
        }
      );
      observer.observe(el);
    },
  });
};
