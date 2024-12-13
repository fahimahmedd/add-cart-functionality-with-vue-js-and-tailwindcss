import { defineStore } from "pinia"
import { ref } from "vue";

export const useProduct = defineStore('useProduct', () => {
    // Quantity
    const initQuantity = ref(1);
    const quantityPlus = () => {
        initQuantity.value++;
    }

    const quantityMinus = () => {
        if(initQuantity.value > 1){
            initQuantity.value --;
        }else{
            initQuantity.value = 1;
        }
    }


    return {initQuantity , quantityPlus , quantityMinus}
  })