<script setup>
   import { useProduct } from '@/stores/useProduct';
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
    <div class="product-price flex items-center">
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

    <div>
      <h5 class="text-lg font-medium">Band Color</h5>
      <div class="color-box flex mt-2 gap-2">
        <!-- Purple -->
        <div>
          <input
            type="radio"
            id="purple"
            name="color"
            class="hidden peer"
            checked
          />
          <label
            for="purple"
            class="radio-label peer-checked:border-primary"
          >
            <span class="block w-3.5 h-3.5 bg-primary rounded-full"></span>
          </label>
        </div>

        <!-- Accent -->
        <div>
          <input type="radio" id="accent" name="color" class="hidden peer" />
          <label for="accent" class="radio-label peer-checked:border-teal-300">
            <span class="block w-3.5 h-3.5 bg-teal-300 rounded-full"></span>
          </label>
        </div>

        <!-- Blue -->
        <div>
          <input type="radio" id="blue" name="color" class="hidden peer" />
          <label for="blue" class="radio-label peer-checked:border-sky-500">
            <span class="block w-3.5 h-3.5 bg-sky-500 rounded-full"></span>
          </label>
        </div>

        <!-- Black -->
        <div>
          <input type="radio" id="black" name="color" class="hidden peer" />
          <label for="black" class="radio-label peer-checked:border-slate-700">
            <span class="block w-3.5 h-3.5 bg-slate-700 rounded-full"></span>
          </label>
        </div>
      </div>
    </div>

    <div class="py-5">
      <h5 class="text-lg font-medium">Wrist Size</h5>
      <div class="mt-3 flex gap-2">
        <div>
          <input
            class="hidden peer"
            type="radio"
            name="size"
            data-size="S"
            data-amount="69"
            id="size-s"
          />
          <label class="size-label" for="size-s">
            <span class="font-bold text-md text-slate-700 mr-1">S</span> $69
          </label>
        </div>
        <div>
          <input
            class="hidden peer"
            type="radio"
            name="size"
            data-size="M"
            data-amount="79"
            id="size-m"
            checked
          />
          <label class="size-label" for="size-m">
            <span class="font-bold text-md text-slate-700 mr-1">M</span> $79
          </label>
        </div>
        <div>
          <input
            class="hidden peer"
            type="radio"
            name="size"
            data-size="L"
            data-amount="89"
            id="size-l"
          />
          <label class="size-label" for="size-l">
            <span class="font-bold text-md text-slate-700 mr-1">L</span> $89
          </label>
        </div>
        <div>
          <input
            class="hidden peer"
            type="radio"
            name="size"
            data-size="XL"
            data-amount="99"
            id="size-xl"
          />
          <label class="size-label" for="size-xl">
            <span class="font-bold text-md text-slate-700 mr-1">XL</span> $99
          </label>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-3 mt-3">
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
          :value="productUse.initQuantity"
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
      <button
        class="px-5 py-2 text-white bg-primary rounded-md hover:bg-indigo-500 focus:outline-none"
      >
        Add to Cart
      </button>
      <div>
        <ion-icon name="heart-outline" class="w-6 h-6 text-primary"></ion-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
