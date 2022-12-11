import { useStorage } from "@vueuse/core";

class I18n {
  locale: any;
  constructor() {
    this.locale = useStorage("locale", "zh-CN");
  }

  toggleLocale = () => {
    this.locale.value = this.locale.value === "zh-CN" ? "en" : "zh-CN";
    console.log(this.locale.value);
  };
}

export default new I18n();
