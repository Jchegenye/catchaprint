<template id="comments">
  <div class="comments-wrap">
    <h2 class="comments-title">Comments</h2>
    <div v-for="(comment, index) in this.$root.comments" v-bind:key="index" class="comment">
      <img class="gravatar" v-bind:src="comment.author_avatar_urls[48]" />
      <div class="comment-author">{{comment.author_name}}</div>
      <div class="comment-content" v-html="comment.content.rendered"></div>
    </div>
  </div>
</template>
<script>
export default {
  template: "#comments"
  //props: ["comments"],
};
</script>