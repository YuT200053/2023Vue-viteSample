// const { defineStore } = Pinia;
import { defineStore } from 'pinia';
// 匯入 productStore
import productStore from './productStore.js';

export default defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addCart(productId, qty = 1) {
      // 取得已經有加入購物車的項目
      // 進行判斷，如果購物車有該項目則加一，若沒有則新增一個購物車項目
      const currentCart = this.cart.find((item) => item.productId === productId);

      if (currentCart) {
        currentCart.qty += qty;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty
        });
      }

      console.log(this.cart);
    },
    removeCart(id) {
      const index = this.cart.findIndex((item) => item.id === id);
      this.cart.splice(index, 1);
    },
    // 調整購物車數量的方式
    setCartQty(id, event) {
      const currentCart = this.cart.find((item) => item.id === id);
      currentCart.qty = event.target.value * 1; // 轉成純數值
    }
  },
  getters: {
    cartList: ({ cart }) => {
      // 1. 購物車的品項資訊，需要整合產品資訊 productStore
      // 2. 需要計算小記金額
      // 3. 需要計算總金額

      // 若是在 store 取用其他 store 的資料，不用使用 mapState，直接使用方法解構即可
      const { products } = productStore();

      const carts = cart.map((item) => {
        // 單一產品取出
        const product = products.find((product) => product.id === item.productId);
        return {
          ...item,
          product,
          subTotal: product.price * item.qty
        };
      });
      const total = carts.reduce((a, b) => (a += b.subTotal), 0);
      console.log(total);

      return {
        // 購物車列表，包含產品資訊
        carts,
        // 小記加總
        total
      };
    }
  }
});
