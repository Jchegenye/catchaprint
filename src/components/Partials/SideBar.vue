<template >
  <div>
    <button type="button" class="hamburger is-closed" data-toggle="offcanvas">
      <span class="hamb-top"></span>
      <span class="hamb-middle"></span>
      <span class="hamb-bottom"></span>
    </button>
    <div id="sidebar">
      <b-navbar-nav id="sidebar-wrapper" role="navigation">
        <!-- Brand -->
        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="#" class="mr-0">
            <b-img
              v-if="this.$root.bloginfo.logo"
              :src="this.$root.bloginfo.logo"
              class="logo text-center mx-auto d-flex"
              fluid
              :alt="this.$root.bloginfo.name"
            ></b-img>
            <div class="bloginfo">
              <h4 v-html="this.$root.bloginfo.name"></h4>
              <small v-html="this.$root.bloginfo.description"></small>
            </div>
          </b-navbar-brand>
        </b-navbar>
        <!-- /Brand -->
        <!-- Menu  -->
        <div id="menus">
          <ul class="outer-menu">
            <b-nav-item v-bind:to="{path:'/'}">
              <i class="fas fa-home"></i> Landing
            </b-nav-item>
          </ul>
          <!-- <b-nav-item v-bind:to="{ name: 'normal', params: { normal: 'all-images'}}">Explore</b-nav-item> -->
          <ul
            v-for="(menu, index) in this.$root.menus.location.header"
            :key="index"
            class="outer-menu"
          >
            <b-nav-item v-bind:to="{ name: 'normal', params: { normal: menu.slug}}">
              <span v-html="menu.graphemica_meta" v-if="menu.graphemica_meta"></span>
              <i v-bind:class="menu.font_awesome_class" v-if="menu.font_awesome_class"></i>
              <span>{{menu.title}}</span>
            </b-nav-item>
            <ul v-for="(child_item, index) in menu.child_items" :key="index" class="inner-menu">
              <b-nav-item v-bind:to="{ name: 'category', params: { category: child_item.slug}}">
                <span v-html="child_item.graphemica_meta" v-if="child_item.graphemica_meta"></span>
                <i
                  v-bind:class="child_item.font_awesome_class"
                  v-if="child_item.font_awesome_class"
                ></i>
                <span>{{child_item.title}}</span>
              </b-nav-item>
            </ul>
          </ul>
          <ul class="inner-menu">
            <b-nav-item
              v-bind:to="{ name: 'shopping-cart', params: { shopping_cart: 'shopping-cart'}}"
            >
              <i class="fas fa-shopping-bag"></i> Shopping Cart
            </b-nav-item>
            <b-nav-item v-bind:to="{ name: 'bookmark', params: { bookmark: 'bookmark'}}">
              <i class="fas fa-bookmark"></i> Bookmark
            </b-nav-item>
          </ul>
        </div>
        <!-- /Menu  -->
        <!-- bottom-footer -->
        <div id="bottom-footer" class="text-center">
          <a :to="{path:'#'}">Contact Us</a>
          <div class="social">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
        <!-- /bottom-footer -->
      </b-navbar-nav>
    </div>
  </div>
</template>

<script>
name: "sidebar";
export default {};
</script>