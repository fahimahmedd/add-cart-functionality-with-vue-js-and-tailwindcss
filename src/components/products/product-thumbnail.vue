<script setup>
  import { useProduct } from '@/stores/useProduct';
  const productUse = useProduct();

</script>

<template>
  <div class="product-thumbnail">
    <img
      :src="productUse.selctedImage"
      alt=""
      class="w-100 rounded-xl"
    />
  </div>
</template>

<style lang="scss" scoped></style>
