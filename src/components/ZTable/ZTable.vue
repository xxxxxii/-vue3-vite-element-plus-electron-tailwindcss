<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-10 22:25:42
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-10-20 10:50:29
 * @FilePath: \vue3vite\src\components\ZTable\zTable.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <el-table :data="props.tableMode.tableData" style="width: 100%" border>
    <el-table-column
      v-for="(item, index) in props.tableMode.tableTitle"
      :label="item.label"
      :width="item.width || 'auto'"
    >
      <template #default="scope">
        <div v-if="item.type === 'image'">
          <image-preview :url="scope.row[item.dataKey]" />
        </div>
        <div v-else style="display: flex; align-items: center">
          <el-icon v-if="item.icon"
            ><component :is="item.icon"></component
          ></el-icon>
          <span style="margin-left: 10px">{{ scope.row[item.dataKey] }}</span>
        </div>
      </template>
    </el-table-column>

    <el-table-column
      :width="props.tableMode.tableOptions.width || optionsWhith"
      :label="props.tableMode.tableOptions.label"
    >
      <template #default="scope">
        <div v-if="props.tableMode.tableOptions">
          <el-button-group ref="buttonGroup">
            <el-button
              v-for="(oItem, oIndex) in props.tableMode.tableOptions.options"
              size="small"
              :type="oItem.type"
              :index="oIndex"
              @click="handleBtn(oItem, scope.row)"
            >
              <template v-if="oItem.icon" #icon>
                <component :is="oItem.icon"></component>
              </template>
              {{ oItem.label }}</el-button
            >
          </el-button-group>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import ImagePreview from "../ImagePreview/index.vue";
const props = defineProps({
  tableMode: Object,
});
const emits = defineEmits();

const buttonGroup = ref<null | HTMLElement>(null);

let optionsWhith = computed(() => {
  return (
    [...props.tableMode.tableOptions.options].reduce((width, btn) => {
      let capital = 0;
      let chinaCharWhith = 0;
      let charChief = btn.label.length;
      let iconWhith = 0;
      // 是否存在图标
      if (btn.icon) {
        iconWhith = 16;
      }
      // 中文个数
      if (btn.label.match(/[\u4e00-\u9fa5]/g) != null) {
        let cCharNum = btn.label.match(/[\u4e00-\u9fa5]/g).length;
        charChief -= cCharNum;
        chinaCharWhith = cCharNum * 12;
      }
      // 大写个数
      if (btn.label.match(/^[A-Z]/g) != null) {
        let capitalCharNum = btn.label.match(/[A-Z]/g).length;
        charChief -= capitalCharNum;
        capital = capitalCharNum * 7.3;
        console.log(capitalCharNum);
      }
      return (width +=
        chinaCharWhith + capital + charChief * 6 + 24 + iconWhith);
    }, 0) + 24
  );
});
console.log(optionsWhith);

const handleBtn = (optionRow: object, dataRow: object) => {
  emits("handleBtn", { optionRow, dataRow });
};
</script>
