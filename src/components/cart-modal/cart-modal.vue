<script setup>
import { useProduct } from "@/stores/useProduct";
import { defineProps, defineEmits } from 'vue';

const productUse = useProduct();

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:showModal']);
const closeModal = () => {
  emit('update:showModal', false);
};


</script>
<template>
  <div>
    <div
      v-if="showModal"
      class="fixed inset-0 bg-gray-950 bg-opacity-50 flex justify-center items-center z-50"
      @click.self="closeModal"
    >
      <!-- Modal Container -->
      <div
        class="bg-white rounded-xl shadow-lg p-10 relative max-w-[680px] w-full mx-4"
      >
        <!-- Close Button -->
        <button
          class="absolute top-5 right-5 h-10 flex items-center justify-center w-10 border rounded-full text-gray-500 hover:text-gray-800"
          @click="closeModal"
        >
          <ion-icon name="close-outline" class="text-2xl"></ion-icon>
        </button>

        <!-- Modal Content -->
        <div>
          <div class="modal-header">
            <h2 class="text-2xl font-bold text-gray-700">Your Cart</h2>
          </div>
          <div class="modal-body py-10">
            <table class="w-full border-collapse">
              <thead>
                <tr>
                  <th class="table-heading text-left w-[40%]">Item</th>
                  <th class="table-heading text-center w-[15%]">Color</th>
                  <th class="table-heading text-center w-[15%]">Size</th>
                  <th class="table-heading text-center w-[15%]">Qnt</th>
                  <th class="table-heading text-right w-[15%]">Price</th>
                </tr>
              </thead>
              <tbody v-for="item in productUse.cartList" :key="item.size">
                <tr class="border-b border-slate-300">
                  <td class="py-3 flex items-center">
                    <div class="w-10 mr-2">
                      <img
                        class="rounded-md"
                        :src="item.image"
                        alt="Product image"
                      />
                    </div>
                    <span class="text-sm text-slate-700">Classy Modern Smart Watch</span>
                  </td>
                  <td class="text-center text-sm text-slate-700">{{item.color.charAt(0).toUpperCase() + item.color.slice(1) }}</td>
                  <td class="text-center text-sm text-slate-700 font-medium">
                    {{ item.size }}
                  </td>
                  <td class="text-center text-sm text-slate-700 font-medium">
                    {{ item.qty }}
                  </td>
                  <td class="text-right text-sm text-slate-700 font-medium">
                    ${{ item.price }}
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td class="py-5 text-sm text-slate-700 font-medium">
                   Total
                  </td>
                  <td class="text-center text-sm text-slate-700"></td>
                  <td class="text-center text-sm text-slate-700 font-medium">
                    
                  </td>
                  <td class="text-center text-sm text-slate-700 font-medium">
                    {{ productUse.totalQuantity }}
                  </td>
                  <td class="text-right text-xl text-slate-700 font-bold">
                    ${{ productUse.totalAmount }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer flex gap-4 justify-end">
            <button
              class="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-200"
              @click="closeModal"
            >
              Continue Shopping
            </button>
            <button
              class="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-indigo-500"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
