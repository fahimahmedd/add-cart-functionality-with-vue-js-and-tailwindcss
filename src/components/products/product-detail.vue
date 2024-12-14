<script setup>
import { useProduct } from "@/stores/useProduct";
import ProductInfo from "./product-info.vue";
import ProductThumbnail from "./product-thumbnail.vue";
import CartModal from "../cart-modal/cart-modal.vue";
import { ref } from "vue";

const productUse = useProduct();
const showModal = ref(false);

const openModal = () =>{
  showModal.value = true;
}

</script>

<template>
  <div class="grid grid-cols-2 gap-8 items-center">
    <ProductThumbnail />
    <ProductInfo />

    <!-- Checkout Sticky Button -->
    <button
      class="fixed bottom-[30px] left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full bg-secondary shadow-md text-[15px] text-gray-700 font-semibold flex items-center gap-2 cursor-pointer transition-opacity duration-1000"
      v-if="productUse.showStickyButton"
      @click="openModal"
    >
      <ion-icon name="cart" class="text-[22px]"></ion-icon>
      Checkout
      <span class="text-[12px] h-[22px] w-[22px] bg-white rounded-[4px] flex items-center justify-center ml-1"> {{ productUse.checkoutItem }} </span>
    </button>

    <!-- Cart Modal -->
    <CartModal :showModal="showModal" @update:showModal="showModal = false"  />
  </div>
</template>

<style lang="scss" scoped></style>
