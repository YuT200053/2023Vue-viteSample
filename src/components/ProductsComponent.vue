<template>
  <div class="row row-cols-3 g-3 my-3 g-2">
    <div class="col" v-for="product in sortProduct" :key="product.id">
      <div class="card">
        <img :src="product.imageUrl" class="card-img-top" alt="product.title" />
        <div class="card-body">
          <h6 class="card-title">
            {{ product.title }}
            <span class="float-end">$ {{ product.price }}</span>
          </h6>
          <a href="#" class="btn btn-outline-primary w-100" @click.prevent="addCart(product.id)"
            >加入購物車</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 取得 pinia 中的產品資料
import productStore from '../stores/productStore.js';
import cartStore from '../stores/cartStore.js';
// const { mapState, mapActions } = Pinia;
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(productStore, ['sortProduct'])
  },
  methods: {
    ...mapActions(cartStore, ['addCart'])
  }
};
</script>
