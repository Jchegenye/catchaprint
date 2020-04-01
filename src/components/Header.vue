<template>
  <div class="header">
    <b-container>
      <b-navbar-brand to="/">
        <b-img
          v-if="this.$root.bloginfo.logo"
          :src="this.$root.bloginfo.logo"
          class="logo"
          fluid
          :alt="this.$root.bloginfo.name"
        ></b-img>
        <div v-else>{{this.$root.bloginfo.name}}</div>
      </b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item v-bind:to="{path:'/'}">Landing</b-nav-item>
        <b-nav-item
          v-for="(menu, key, index) in menus"
          v-bind:key="index"
          v-bind:to="{ name: 'page', params: { slug: menu.slug }}"
        >{{menu.title}}</b-nav-item>
      </b-navbar-nav>
    </b-container>
  </div>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";

export default {
  name: "Header",
  components: {
    SearchForm
  },
  data() {
    return {
      fixed: false,
      menus: []
    };
  },
  created() {
    var _this = this;

    this.$axios
      .get(this.$Endpoint.API_BASE_PATH_MENU + "/locations/header")
      .then(function(response) {
        _this.menus = response.data.items;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>