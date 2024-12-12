<script setup>
import ProductInfo from "./product-info.vue";
import ProductThumbnail from "./product-thumbnail.vue";
</script>

<template>
  <div class="grid grid-cols-2 gap-8">
    <ProductThumbnail />
    <ProductInfo />
  </div>
</template>

<style lang="scss" scoped></style>
