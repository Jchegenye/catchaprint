<template id="the-loop">
  <div>
    <!--div wrapper-->
    <div v-if="this.$root.posts.length > 0">
      <!--loop starts here-->
      <ul class="the-loop">
        <li v-for="(post, index) in this.$root.posts" v-bind:key="index">
          <div class="title">
            <router-link
              v-bind:to="{ name: 'post', params: { slug: post.slug }}"
            >{{post.title.rendered}}</router-link>
          </div>
          <div class="meta">
            Categories:
            <router-link
              v-for="(cat, index) in post.cats"
              v-bind:key="index"
              v-bind:to="{name:'category', params: { category: cat.slug }}"
            >
              {{cat.name}}
              <span v-if="index < post.cats.length - 1">,&nbsp;</span>
            </router-link>
          </div>
          <div class="excerpt" v-html="post.excerpt.rendered"></div>
        </li>
      </ul>
      <!--the loop ends-->
      <!--paging starts here-->
      <ul v-if="this.$root.pagers.length > 1" class="pagination">
        <li v-for="(pager,index) in this.$root.pagers" class="page-item" v-bind:key="index">
          <router-link
            class="page-link"
            v-bind:to="{path:$route.fullPath, query: {page : pager}}"
          >{{pager}}</router-link>
        </li>
      </ul>
      <!--paging ends-->
    </div>
    <!--end v-if-->
    <div v-else>
      <nopost />
    </div>
  </div>
  <!--end div wrapper-->
</template>
<script>
import nopost from "@/components/Page/Nopost.vue";
export default {
  template: "#the-loop",
  components: {
    nopost
  }
  //props: ["posts", "pagers"]
};
</script>