<script setup></script>

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
      <div class="text-lg text-slate-500">$99.00</div>
      <div class="text-2xl ml-3 text-primary font-bold">$79.00</div>
    </div>
    <p>
      I must explain to you how all this mistaken idea of denoun cing ple
      praising pain was born and I will give you a complete account of the
      system, and expound the actual teaching.
    </p>

    <div class="product-description d-flex">
      <div class="description-item">
        <div class="type-title">Type</div>
        <h6>Watch</h6>
      </div>
      <div class="description-item">
        <div class="type-title">Model Number</div>
        <h6>Forerunner 290XT</h6>
      </div>
    </div>

    <div class="product-color">
      <h5>Band Color</h5>
      <div class="color-box">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="product-color"
            data-image="./images/product/p-1.png"
            data-color="Purple"
            id="purple"
            checked
          />
          <label class="form-check-label" for="purple">
            <span style="background-color: #816bff"></span>
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="product-color"
            data-image="./images/product/p-2.png"
            data-color="Accent"
            id="accent"
          />
          <label class="form-check-label" for="accent">
            <span style="background-color: #1fcec9"></span>
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="product-color"
            data-image="./images/product/p-3.png"
            data-color="Blue"
            id="blue"
          />
          <label class="form-check-label" for="blue">
            <span style="background-color: #4b97d3"></span>
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="product-color"
            data-image="./images/product/p-4.png"
            data-color="Black"
            id="black"
          />
          <label class="form-check-label" for="black">
            <span style="background-color: #3b4747"></span
          ></label>
        </div>
      </div>
    </div>

    <div class="product-size">
      <h5>Wrist Size</h5>
      <div class="size-box">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="product-size"
            data-size="S"
            data-amount="69"
            id="size-s"
          />
          <label class="form-check-label" for="size-s">
            <span>S</span> $69
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="product-size"
            data-size="M"
            data-amount="79"
            id="size-m"
            checked
          />
          <label class="form-check-label" for="size-m">
            <span>M</span> $79
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="product-size"
            data-size="L"
            data-amount="89"
            id="size-l"
          />
          <label class="form-check-label" for="size-l">
            <span>L</span> $89
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="product-size"
            data-size="XL"
            data-amount="99"
            id="size-xl"
          />
          <label class="form-check-label" for="size-xl">
            <span>XL</span> $99
          </label>
        </div>
      </div>
    </div>

    <div class="product-quantity mt-3">
      <div class="qty-input-container">
        <button
          class="qty-count qty-count--minus"
          data-action="minus"
          type="button"
        >
          -
        </button>
        <input
          class="product-qty"
          type="number"
          name="product-qty"
          min="1"
          max="10"
          value="1"
        />
        <button
          class="qty-count qty-count--add"
          data-action="add"
          type="button"
        >
          +
        </button>
      </div>
      <button class="c-button">Add to Cart</button>
      <div class="favourite-listing">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
