<script setup>
import { useProduct } from "@/stores/useProduct";
const productUse = useProduct();

const sizeOptions = [
  { size: 'S' , price: '69'},
  { size: 'M' , price: '79'},
  { size: 'L' , price: '89'},
  { size: 'XL' , price: '99'},
] 
</script>

<template>
     <div class="py-5">
      <h5 class="text-lg font-medium">Wrist Size</h5>
      <div class="mt-3 flex gap-2">
        <div v-for="option in sizeOptions" :key="option.size" >
          <input
            type="radio"
            name="size"
            :id="+option.size"
            :value="option.price"
            class="hidden peer"
            :checked="option.size === productUse.selectedSize.size"
          />
          <label class="size-label" for="size-s" @click="productUse.changeSize(option)">
            <span class="font-bold text-md text-slate-700 mr-1">{{ option.size }}</span> ${{ option.price }}
          </label>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>


</style>