<script setup>
import { ref } from "vue";
const selectedColor = ref("purple");

const colorImages = {
  purple : "/src/assets/images/product/p-1.png",
  accent : "/src/assets/images/product/p-2.png",
  blue : "/src/assets/images/product/p-3.png",
  black : "/src/assets/images/product/p-4.png",
}
</script>

<template>
  <div class="product-thumbnail">
    <img
      :src="colorImages[selectedColor]"
      alt=""
      class="w-100 rounded-xl"
    />
  </div>
</template>

<style lang="scss" scoped></style>
