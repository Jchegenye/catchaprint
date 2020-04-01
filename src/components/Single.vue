<template id="single">
  <div>
    <div class="container">
      <div class="row single">
        <div class="col-lg-8 content-area">
          <div v-if="this.$root.post[0]">
            <h1 class="post-title">{{this.$root.post[0].title.rendered}}</h1>
            <div class="content" v-html="this.$root.post[0].content.rendered"></div>
            <Comments />
            <CommentForm />
          </div>
          <!--end v-if-->
          <div v-else>
            <nopost />
          </div>
        </div>
        <!--end content-area-->
        <Sidebar />
      </div>
      <!--end single-->
    </div>
    <!--end container-->
  </div>
</template>

<script>
import Sidebar from "@/components/Blog/Sidebar.vue";
import CommentForm from "@/components/Blog/CommentForm.vue";
import Comments from "@/components/Blog/Comments.vue";
import nopost from "@/components/Page/Nopost.vue";

export default {
  template: "#single",
  components: {
    Sidebar,
    CommentForm,
    Comments,
    nopost
  }
  //props: ["post", "comments"]
};
</script>