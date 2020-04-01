<template id="search-form">
  <div class="d-flex">
    <b-form-input
      type="text"
      name="search"
      v-on:keyup.enter="doSearch"
      v-model="searchTerm"
      size="sm"
      class="mr-sm-2 bg-transparent searchField"
      placeholder="Search"
    ></b-form-input>
    <b-button size="sm" class="my-2 my-sm-0 bg-transparent border-0 searchBtn">
      <i class="fas fa-search"></i>
    </b-button>
  </div>
</template>

<script>
export default {
  template: "#search-form",
  methods: {
    doSearch: function() {
      this.$router.push({
        name: "search",
        query: {
          term: this.searchTerm
        }
      });
    }
  },
  data: function() {
    var searchTerm = this.$route.query.term ? this.$route.query.term : "";
    return {
      searchTerm: searchTerm
    };
  },
  watch: {
    $route: function(to, from) {
      var searchTerm = to.query.term ? to.query.term : "";
      this.searchTerm = searchTerm;
    }
  }
};
</script>
