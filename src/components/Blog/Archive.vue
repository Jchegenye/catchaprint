<template id="archive">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="main-title">{{$route.name}}</h1>
          <Theloop v-bind:posts="this.$root.posts" v-bind:pagers="this.$root.pagers" />
        </div>
        <Sidebar />
      </div>
    </div>
    <!--end container-->
  </div>
</template>

<script>
import Theloop from "@/components/Blog/Theloop.vue";
import Sidebar from "@/components/Blog/Sidebar.vue";

export default {
  template: "#archive",
  components: {
    Theloop,
    Sidebar
  }
  //props: ["posts", "pagers"]
};
</script>