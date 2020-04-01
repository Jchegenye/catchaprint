<template id="page">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div v-if="this.$root.post[0]">
            <h1>{{this.$root.post[0].title.rendered}}</h1>
            <div class="content" v-html="this.$root.post[0].content.rendered"></div>
          </div>
          <div v-else>
            <nopost />
          </div>
        </div>
        <!--end col-lg-12-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </div>
</template> 

<script>
import nopost from "@/components/Page/Nopost.vue";

export default {
  template: "#page",
  components: {
    nopost
  }
  //props: ["post"]
};
</script>
