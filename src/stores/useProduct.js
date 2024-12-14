import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProduct = defineStore("useProduct", () => {
  // Quantity
  const quantity = ref(1);
  const quantityPlus = () => {
    quantity.value++;
  };
  const quantityMinus = () => {
    if (quantity.value > 1) {
      quantity.value--;
    } else {
      quantity.value = 1;
    }
  };

  // Thumbnail changing
  const selectedColor = ref("purple");
  const colorImages = {
    purple: "/src/assets/images/product/p-1.png",
    accent: "/src/assets/images/product/p-2.png",
    blue: "/src/assets/images/product/p-3.png",
    black: "/src/assets/images/product/p-4.png",
  };

  const selctedImage = computed(() => colorImages[selectedColor.value]);
  const changeColor = (color) => {
    selectedColor.value = color;
  };

  // Size selcted
  const selectedSize = ref({ size: "M", price: 79 });
  const changeSize = (newSize) => {
    selectedSize.value = newSize;
  };

  // Add to cart
  const showStickyButton = ref(false);
  const totalQuantity = ref(0);
  const totalAmount = ref(0);
  const checkoutItem = ref(0);
  const addCart = () => {
    checkoutItem.value++;
    const cartItem = {
      image: selctedImage.value,
      color: selectedColor.value,
      size: selectedSize.value.size,
      qty: quantity.value,
      price: selectedSize.value.price * quantity.value,
    };
    cartList.push(cartItem);
    showStickyButton.value = true;
    totalQuantity.value += cartItem.qty;
    totalAmount.value += cartItem.price;
  };

  const cartList = [];

  return {
    quantity,
    quantityPlus,
    quantityMinus,
    selectedColor,
    selctedImage,
    changeColor,
    selectedSize,
    changeSize,
    showStickyButton,
    checkoutItem,
    addCart,
    cartList,
    totalQuantity,
    totalAmount,
  };
});
