<template id="search">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="main-title">Search Results</h1>
          <Theloop v-bind:posts="this.$root.posts" v-bind:pagers="this.$root.pagers" />
        </div>
        <!--end col-lg-12-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </div>
</template>

<script>
import Theloop from "@/components/Blog/Theloop.vue";
export default {
  template: "#search",
  components: {
    Theloop
  }
  //props: ['posts', 'pagers']
};
</script>