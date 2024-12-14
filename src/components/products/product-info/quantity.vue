<script setup>
import { useProduct } from "@/stores/useProduct";
const productUse = useProduct();
</script>

<template>
    <div
        class="flex items-center overflow-hidden border border-gray-300 rounded-md"
      >
        <button
          class="quntity-button border-r text-3xl"
          data-action="minus"
          type="button"
          @click="productUse.quantityMinus"
        >
          -
        </button>
        <input
          class="w-10 h-10 text-center font-bold text-gray-700 bg-transparent appearance-none focus:outline-none"
          type="number"
          name="product-qty"
          min="1"
          max="10"
          :value="productUse.quantity"
        />
        <button
          class="quntity-button border-l text-lg"
          data-action="add"
          type="button"
          @click="productUse.quantityPlus"
        >
          +
        </button>
      </div>
</template>

<style lang="scss" scoped>


</style>