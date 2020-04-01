<template >
  <div>
    <vue-headful v-bind:title="this.$root.bloginfo.name+' | Bookmark'" />

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
                    <th>Product</th>
                    <th style="width: 15%;"></th>
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
                    <td class="actions text-center" data-th>
                      <button class="btn" v-b-tooltip.hover.topleft="'Add to Cart'">
                        <i class="fas fa-cart-plus"></i>
                      </button>
                      <button class="btn" v-b-tooltip.hover.topleft="'Remove from Bookmarks'">
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
                    <td class="border-top-2 text-left" colspan="2">
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
                        v-bind:to="{ name: 'shopping-cart', params: { shopping_cart: 'shopping-cart'}}"
                        class="px-0 text-capitalize text-right"
                      >
                        <small>
                          View Cart &nbsp;
                          <i class="far fa-caret-square-right"></i>
                        </small>
                      </router-link>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3"></td>
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
  name: "explore",
  components: {
    TopBar,
    SideBar
  }
};
</script>