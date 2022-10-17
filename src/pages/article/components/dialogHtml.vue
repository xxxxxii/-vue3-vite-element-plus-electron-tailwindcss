<template>
  <div>
    <el-radio-group v-model="radio" @change="radioChange">
      <el-radio :label="1">保存本地</el-radio>
      <el-radio :label="2">保存服务器</el-radio>
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits()

const radio = ref(null)

const radioChange = (val) => {
  emits('radioValue', val)
}
</script>
