<template >
  <div id="explore">
    <vue-headful
      v-if="this.$root.bloginfo.name == 'category'"
      :title="this.$root.$route.params.category | snakeToTitle "
      description="General categories of images"
    />
    <vue-headful
      v-else-if="this.$root.bloginfo.name == 'normal'"
      :title="this.$root.$route.params.normal | snakeToTitle "
      description="General images"
    />
    <div id="wrapper" class="toggled">
      <!-- Sidebar -->
      <SideBar />
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <TopBar />
            <Gridloader />
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
import Gridloader from "@/components/Partials/Gridloader.vue";

export default {
  name: "explore",
  components: {
    TopBar,
    SideBar,
    Gridloader
  }
};
</script>