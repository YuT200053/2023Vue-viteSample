<template>
  <div class="bg-light my-4 p-4">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <table class="table table-light align-middle" v-else>
      <!-- 購物車品項 -->
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
          <td>
            <a href="#" class="text-dark text-decoration-none" @click.prevent="removeCart(item.id)"
              >×</a
            >
          </td>
          <td>
            <img :src="item.product.imageUrl" :alt="item.product.title" class="table-image" />
          </td>
          <td>{{ item.product.title }}</td>
          <td>
            <!-- 先透過事件來觸發 event，再帶入 setCartQty 中 -->
            <select
              name=""
              id=""
              class="form-select"
              :value="item.qty"
              @change="(event) => setCartQty(item.id, event)"
            >
              <option v-for="i in 20" :key="i" :value="i">{{ i }}</option>
            </select>
          </td>
          <td class="text-end">$ {{ item.subTotal }}</td>
        </tr>
      </tbody>
      <!-- 購物車小記加總 -->
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額 NT$ {{ cartList.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import cartStore from '../stores/cartStore.js';
// const { mapState, mapActions } = Pinia;
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(cartStore, ['cartList'])
  },
  methods: {
    ...mapActions(cartStore, ['removeCart', 'setCartQty'])
  }
};
</script>
