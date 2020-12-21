<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right">
      <button class="btn btn-primary my-4" @click="openmodel(true)">
        新增產品
      </button>
    </div>

    <table class="table mb-4 text-center">
      <thead>
        <tr>
          <th width="80">流水號</th>
          <th width="120">上架狀態</th>
          <th width="80">預覽圖</th>
          <th width="360">產品名稱</th>
          <th width="80">原價</th>
          <th width="80">售價</th>
          <th width="80">單位</th>
          <th width="80"></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.num }}</td>
          <td>
            <span v-if="item.is_enable" class="text-success">啟用</span
            ><span v-else>尚未啟用</span>
          </td>
          <td>
            <img v-bind:src="item.imageUrl" alt="產品圖" class="img-fluid w-50" />
          </td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price | currency}}</td>
          <td>{{ item.price | currency}}</td>
          <td>{{ item.unit }}</td>
          <td>
            <span
              ><button
                class="btn btn-outline-coffemilk btn-sm mb-2"
                @click="openmodel(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openremovemodel(item)"
              >
                刪除
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <!------------ 分頁碼標籤 ------------>
    <!------------ 分頁碼標籤 ------------>
    <!------------ 分頁碼標籤 ------------>

    <!-- <pagination :pages="pagination" @emit-page="getproducts"></pagination> -->

    <!------------ Modal ------------>
    <!------------ Modal ------------>
    <!------------ Modal ------------>

    <div
      class="modal fade"
      id="productsModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile"
                    >或 上傳圖片
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="status.uploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadfile"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt=""
                  :src="tempProduct.imageUrl"
                />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="tempProduct.title"
                    placeholder="請輸入標題"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      v-model="tempProduct.category"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      v-model="tempProduct.origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      v-model="tempProduct.price"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="tempProduct.description"
                    placeholder="請輸入產品描述"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    v-model="tempProduct.content"
                    placeholder="請輸入產品說明內容"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateproduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>

    <!----------------------------------------刪除功能------------------------------------------------>
    <!----------------------------------------刪除功能------------------------------------------------>
    <!----------------------------------------刪除功能------------------------------------------------>

    <div
      class="modal fade"
      id="delProductModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="removedata">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
//import pagination from '../pagination';

export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      newdatas: false,
      isLoading: false,
      status: { uploading: false },
    };
  },
  // components: {
  //       pagination,
  //   },
  methods: {
    getproducts(page = 1) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      //console.log(process.env.APIPATH)
      this.$http.get(api).then((response) => {
        console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
        //vm.pagination = response.data.pagination;
      });
    },
    uploadfile() {
      const uploadedfile = this.$refs.files.files[0];
      const vm = this;
      const formdata = new FormData();
      formdata.append("file-to-upload", uploadedfile);
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/upload`;
      vm.status.uploading = true;

      this.$http
        .post(url, formdata, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((resp) => {
          console.log(resp.data);

          vm.status.uploading = false;

          if (resp.data.success) {
            vm.$set(vm.tempProduct, "imageUrl", resp.data.imageUrl);
          } else {
            this.$bus.$emit("messsage:push", resp.data.message, "danger");
          }
        });
    },
    openmodel(newdatas, item) {
      if (newdatas) {
        this.tempProduct = {};
        this.newdatas = true;
      } else {
        this.tempProduct = Object.assign({}, item);
        this.newdatas = false;
      }
      $("#productsModal").modal("show");
    },
    updateproduct() {
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product`;
      let httpmethod = "post";
      const vm = this;

      if (!vm.newdatas) {
        api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpmethod = "put";
      }
      //console.log(process.env.APIPATH)
      this.$http[httpmethod](api, { data: vm.tempProduct }).then((response) => {
        console.log(response.data);
        //vm.products = response.data.products;
        if (response.data.success) {
          $("#productsModal").modal("hide");
          vm.getproducts();
        } else {
          alert("新增失敗");
          vm.getproducts();
        }
      });
    },
    openremovemodel(item) {
      this.tempProduct = Object.assign({}, item);
      $("#delProductModal").modal("show");
      console.log(item);
    },
    removedata() {
      const vm = this;
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      console.log(api);
      this.$http.delete(api, { data: vm.tempProduct.id }).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          $("#delProductModal").modal("hide");
          vm.getproducts();
        } else {
          $("#delProductModal").modal("hide");
          vm.getproducts();
          console.log("刪除失敗");
        }
      });
    },
  },

  created() {
    this.getproducts();
  },
};
</script>