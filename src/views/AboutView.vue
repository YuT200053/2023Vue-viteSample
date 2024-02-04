<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data }}
  </div>
</template>

<script>
export default {
  data() {
    data: {
    }
  },
  mounted() {
    // 環境變數
    // api 網址不會寫死在程式碼裡面，所以可以透過環境變數
    const url = import.meta.env.VITE_PATH;
    console.log(import.meta.env.VITE_TEXT);

    this.$http.get(url).then((res) => {
      console.log(res);
      this.data = res.data.results[0];
    });
  }
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
