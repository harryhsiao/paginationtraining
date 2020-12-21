<template>
  <div>
    <navbar />
    <alerts />
    <div class="container-fluid">
      <div class="row">
        <sidebar></sidebar>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view />
          <pages :pages="pagination" @emit-page="getproducts"/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./sidebar";
import navbar from "./navbar";
import alerts from "./alert";
import pages from "../pagination";

export default {
   data() {
     return {
       pagination: {},
     };
   },
  components: {
    sidebar,
    navbar,
    alerts,
    pages,
  },
   created() {
     this.getproducts();
   },
   methods: {

     getproducts(page = 1) {
       const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
       const vm = this;      
       //console.log(process.env.APIPATH)
       this.$http.get(api).then((response) => {
         console.log(response.data);
         vm.pagination = response.data.pagination;
       });
     },

  }
};
</script>