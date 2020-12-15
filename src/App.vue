<template>
  <div id="app">
    <router-view />
    <!-- <router-link to="/">首頁</router-link>
    <router-link :to="{ name: '修改產品' }">產品修改</router-link> -->
  </div>
</template>

<script>
export default {
  name: "App",
  created() {

    // const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
    
    // //console.log(process.env.APIPATH)
    // this.$http.get(api).then((response) => {
    //   console.log(response.data);
    // });

  },
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
