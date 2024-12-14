<script setup>
import { useProduct } from "@/stores/useProduct";
import { computed } from "vue";
const productUse = useProduct();
</script>
<template>
  <div>
    <h5 class="text-lg font-medium">Band Color</h5>
    <div class="color-box flex mt-2 gap-2">
      <div>
        <input
          type="radio"
          id="purple"
          name="color"
          class="hidden peer"
          :checked="productUse.selectedColor === 'purple'"
          @click="productUse.changeColor('purple')"
        />
        <label for="purple" class="radio-label peer-checked:border-primary">
          <span class="block w-3.5 h-3.5 bg-primary rounded-full"></span>
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="accent"
          name="color"
          class="hidden peer"
          :checked="productUse.selectedColor === 'accent'"
          @click="productUse.changeColor('accent')"
        />
        <label for="accent" class="radio-label peer-checked:border-teal-300">
          <span class="block w-3.5 h-3.5 bg-teal-300 rounded-full"></span>
        </label>
      </div>
      <div>
        <input type="radio" id="blue" name="color" class="hidden peer" />
        <label
          for="blue"
          class="radio-label peer-checked:border-sky-500"
          :checked="productUse.selectedColor === 'blue'"
          @click="productUse.changeColor('blue')"
        >
          <span class="block w-3.5 h-3.5 bg-sky-500 rounded-full"></span>
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="black"
          name="color"
          class="hidden peer"
          :checked="productUse.selectedColor === 'black'"
          @click="productUse.changeColor('black')"
        />
        <label for="black" class="radio-label peer-checked:border-slate-700">
          <span class="block w-3.5 h-3.5 bg-slate-700 rounded-full"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
