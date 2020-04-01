<template >
  <div id="products">
    <vue-headful v-bind:title="'Shopping Cart | '+this.$root.bloginfo.name" />

    <div id="wrapper" class="toggled">
      <!-- Sidebar -->
      <SideBar />
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <TopBar />

            <div id="otherpages">
              <!-- shopping-cart data -->
              <table id="cart" class="table table-hover table-condensed">
                <thead>
                  <tr>
                    <th style="width:50%">Product</th>
                    <th style="width:10%">Quantity</th>
                    <th style="width:10%" class="text-center">SubQuantity</th>
                    <th style="width:20%"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-th="Product">
                      <div class="row">
                        <div class="col-sm-2 hidden-xs">
                          <img src="http://placehold.it/100x100" alt="..." class="img-responsive" />
                        </div>
                        <div class="col-sm-10">
                          <h4 class="nomargin">Product 1</h4>
                          <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Quantity">
                      <b-form-spinbutton id="demo-sb" v-model="value1" min="1" max="100" size="md"></b-form-spinbutton>
                    </td>
                    <td data-th="SubQuantity" class="text-center">{{value1}}</td>
                    <td class="actions text-center" data-th>
                      <button class="btn" v-b-tooltip.hover.topleft="'Refresh'">
                        <i class="fas fa-sync-alt"></i>
                      </button>
                      <button class="btn" v-b-tooltip.hover.topleft="'Remove from shopping cart'">
                        <i class="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="visible-xs">
                    <td class="text-center">
                      <strong>Phone</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-top-2">
                      <router-link
                        v-bind:to="{ name: 'normal', params: { normal: 'all-images'}}"
                        class="px-0 text-capitalize text-left"
                      >
                        <small>
                          <i class="far fa-caret-square-left"></i>&nbsp;
                          Continue Shopping
                        </small>
                      </router-link>&nbsp; | &nbsp;
                      <router-link
                        v-bind:to="{ name: 'bookmark', params: { bookmark: 'bookmark'}}"
                        class="px-0 text-capitalize text-right"
                      >
                        <small>
                          View Bookmarks &nbsp;
                          <i class="far fa-caret-square-right"></i>
                        </small>
                      </router-link>
                    </td>
                    <td class="border-top-2 text-right bg-light">
                      <strong>Total:</strong>
                    </td>
                    <td class="border-top-2 text-center bg-light">
                      <strong>{{value1}}</strong>
                    </td>
                    <td class="bg-light border-top-2"></td>
                  </tr>
                  <tr>
                    <td colspan="4"></td>
                  </tr>
                  <tr>
                    <td class="border-top-0" colspan="3"></td>
                    <td class="border-top-0 text-center place text-light">
                      <router-link
                        v-bind:to="{ name: 'order', params: { order: 'order'}}"
                        class="px-0 text-capitalize"
                      >
                        <small>
                          Continue to checkout &nbsp;
                          <i class="far fa-caret-square-right"></i>
                        </small>
                      </router-link>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <!-- /shopping-cart data -->
            </div>
          </div>
        </div>
      </div>
      <!-- /#page-content-wrapper -->
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/Partials/TopBar.vue";
import SideBar from "@/components/Partials/SideBar.vue";

export default {
  name: "cart",
  components: {
    TopBar,
    SideBar
  },
  data() {
    return {
      value1: 5
    };
  }
};
</script>