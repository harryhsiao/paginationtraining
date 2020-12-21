<template>
  <div class="">
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span class="h2">管理員項目</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column">
          <li class="nav-item border">            
            <router-link class="nav-link h4" :to="{ name:'products' }"><i class="fas fa-box-open fa-fw"></i>&nbsp;&nbsp;產品列表</router-link>
          </li>
          <li class="nav-item border">            
            <router-link class="nav-link h4" :to="{ name:'orders' }"><i class="fas fa-clipboard-list fa-fw"></i>&nbsp;&nbsp;訂單列表</router-link>
          </li>
          <li class="nav-item border">
            <router-link class="nav-link h4" :to="{ name:'coupon' }"><i class="fas fa-ticket-alt fa-fw"></i>&nbsp;&nbsp;優惠券</router-link>
          </li>
        </ul>

        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span class="h2">模擬功能</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">

            <router-link class="nav-link h4" :to="{ name:'shop_sim' }"><i class="fas fa-truck-moving fa-fw"></i>&nbsp;&nbsp;模擬訂單</router-link>
            
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>