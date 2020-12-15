<template>
  <div>
    <navbar/>
    <alerts/>
    <div class="container-fluid">
      <div class="row">

        <sidebar></sidebar>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

            <router-view/>            

        </main>

      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./sidebar";
import navbar from "./navbar";
import alerts from './alert';
//import pages from '../pagination';

export default {
  components: {
    sidebar,
    navbar,
    alerts,
    //pages
  },
  
};
</script>