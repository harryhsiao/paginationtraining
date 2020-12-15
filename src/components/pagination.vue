<template>
    <div class="">
        <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': !pages.has_next}">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="changepage(pages.current_page - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pages.total_pages" :key="page"
        :class="{'active': pages.current_page === page}"
        ><a class="page-link" href="#" @click.prevent="changepage(page)">{{ page }}</a></li>
        <li class="page-item" :class="{'disabled': !pages.has_pre}">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="changepage(pages.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    </div>
</template>

<script>
export default {
    props: ['pages'], //接收produts.vue內pagination陣列內容
    methods: {
        changepage(page) {
            this.$emit('emit-page', page)//傳送page結果回produts.vue，執行getproducts
        }
    }
}
</script>