<script>
import NavbarComponent from './components/NavbarComponent.vue';
import ProductsComponent from './components/ProductsComponent.vue';
import CartComponent from './components/CartComponent.vue';

export default {
  components: {
    NavbarComponent,
    ProductsComponent,
    CartComponent
  }
};
</script>

<template>
  <div class="container">
    <navbar-component></navbar-component>
    <cart-component></cart-component>
    <products-component></products-component>
  </div>
</template>

<style lang="scss">
@import './assets/all.scss';
$primary: red;

div {
  color: $primary;
}

.table-image {
  height: 100px;
  width: 100px;
  /* 避免圖片變形 */
  object-fit: cover;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
