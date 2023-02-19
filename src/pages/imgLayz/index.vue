<template>
  <div>
    <!-- <img v-Imglazy="item" v-for="item in imgs" alt="" /> -->
    <!-- v-lazyImg="item" -->
    <div class="drag-box">
      <div class="rect" v-drag>拖动</div>
    </div>
  </div>
</template>

<script setup>
const imgs = ref([
  "https://blogyl.xyz/get_image/012e43b3-bcdb-44f2-879e-bd45386ba619.png",
  "https://blogyl.xyz/get_image/5bf0980d-7310-4162-b2c8-9df200284ca3.png",
  "https://blogyl.xyz/get_image/17f3d337-bf67-4db4-a017-8790550290a4.png",
  "https://blogyl.xyz/get_image/9089815f-9a92-465e-baac-11c0d1a00ac9.png",
  "https://blogyl.xyz/get_image/def1bfb5-2b20-4e6b-b431-e57788115833.png",
  "https://blogyl.xyz/get_image/76d1fe43-8b49-4530-8bbd-6c64607aa203.png",
  "https://blogyl.xyz/get_image/52937281-9bab-4655-af9e-50233f5ee7c0.png",
]);
</script>

<style scoped>
.drag-box {
  width: 100%;
  height: 600px;
  background-color: aquamarine;
}
.rect {
  width: 100px;
  height: 100px;
  background-color: peru;
}
</style>
