<script setup>
import { useProduct } from "@/stores/useProduct";
import Color from "./product-info/color.vue";
import Size from "./product-info/size.vue";
import Quantity from "./product-info/quantity.vue";
const productUse = useProduct();

</script>

<template>
  <div class="product-block">
    <h2 class="text-[40px] font-bold">Classy Modern Smart Watch</h2>
    <div class="product-review-box flex items-center">
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star-half-outline"></ion-icon>
      <ion-icon name="star-outline"></ion-icon>
      <span class="text-slate-400 font-light text-sm ml-2">(2 Reviews)</span>
    </div>
    <div class="py-4 flex items-center">
      <div class="text-lg text-slate-500 line-through">$99.00</div>
      <div class="text-2xl ml-3 text-primary font-bold">$79.00</div>
    </div>
    <p class="text-md font-light">
      I must explain to you how all this mistaken idea of denoun cing ple
      praising pain was born and I will give you a complete account of the
      system, and expound the actual teaching.
    </p>

    <div class="product-description flex gap-10 py-4">
      <div>
        <div class="text-sm font-regular text-slate-500">Type</div>
        <h6 class="text-md font-medium text-slate-700 mt-1">Watch</h6>
      </div>
      <div>
        <div class="text-sm font-regular text-slate-500">Model Number</div>
        <h6 class="text-md font-medium text-slate-700 mt-1">
          Forerunner 290XT
        </h6>
      </div>
    </div>

    <Color/>
    <Size/>

    <div class="flex items-center gap-3 mt-3">
      <Quantity/>
      <button
        @click="productUse.addCart"
        class="px-5 py-2 text-white bg-primary rounded-md hover:bg-indigo-500 focus:outline-none"
      >
        Add to Cart
      </button>
      <ion-icon name="heart-outline" class="w-6 h-6 text-primary"></ion-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
