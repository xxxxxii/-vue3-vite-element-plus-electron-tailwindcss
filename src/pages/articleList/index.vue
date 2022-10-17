<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-10-10 22:25:42
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-17 17:38:29
 * @FilePath: \vue3vite\src\pages\arc\articleList.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved. 
-->
<template>
  <ZTable :tableMode="tableMode" @handleBtn="handleBtn" />
</template>

<script lang="ts" setup>
import ZTable from "@/components/ZTable/ZTable.vue";
import { articleList } from "@/api/api";

const tableMode = ref({
  tableTitle: [
    {
      label: "标题",
      dataKey: "title",
      icon: "Timer",
    },
    {
      label: "缩略图",
      dataKey: "img",
      width: "150",
      type: "image",
    },
    {
      label: "简介",
      dataKey: "bf",
    },
    {
      label: "发布时间",
      dataKey: "created_at",
    },
  ],

  tableOptions: {
    label: "Operations",
    options: [
      {
        id: "1",
        label: "Edit",
        type: "warning",
        // icon: markRaw(IEpTimer),
      },
      {
        id: "2",
        label: "Delete",
        type: "danger",
        icon: "Timer",
      },
    ],
  },

  tableData: [
    {
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-04",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-01",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
  ],
});
const getArticleList = async () => {
  let res = await articleList();
  console.log(res);
  tableMode.value.tableData = res.data.data;
};
getArticleList();
const handleBtn = (row) => {
  console.log(row);
};
</script>
