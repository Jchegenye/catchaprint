<template>
  <div>
    <b-card-group>
      <div class="card-columns">
        <div v-for="(post, index) in this.$root.filterPosts()" :key="index" class="card">
          <b-card
            overlay
            v-bind:img-src="post.featured_image"
            v-bind:img-alt="post.title"
            text-variant="white"
          >
            <div v-b-modal="'gallery-'+post.id" @click="$root.modalActive(true,post.id,index)">
              <h4 class="card-title">{{post.title}}</h4>
              <b-card-text v-html="post.excerpt"></b-card-text>
              <b-badge variant="dark" class="mr-2">{{post.cat_name}}</b-badge>
            </div>

            <div class="card-sub-footer">
              <div class="social">
                <button v-b-tooltip.hover.topright="'Add to cart'">
                  <i class="fas fa-cart-plus"></i>
                </button>
                <button v-b-tooltip.hover.topright="'Share'">
                  <i class="far fa-share-square"></i>
                </button>
                <button v-b-tooltip.hover.topright="'Add to Bookmark'">
                  <i class="far fa-bookmark"></i>
                </button>
                <button
                  v-b-tooltip.hover.topright="'Zoom in'"
                  v-b-modal="'gallery-'+post.id"
                  @click="$root.modalActive(true,post.id,index)"
                  class="zoom1"
                >
                  <i class="fas fa-search-plus"></i>
                </button>
              </div>
            </div>
          </b-card>

          <b-card-footer v-if="post.mytags">
            <b-badge variant="dark" v-for="(tag, index) in post.mytags" :key="index" class="mr-2">
              <router-link v-bind:to="{ name: 'tag', params: { tag: tag.slug}}">{{tag.name}}</router-link>
            </b-badge>
          </b-card-footer>
        </div>
      </div>

      <!-- MODAL -->
      <MainModal />
      <!-- <SubModal /> -->
    </b-card-group>
  </div>
</template>

<script>
import MainModal from "@/components/Partials/Modal/MainModal.vue";
import SubModal from "@/components/Partials/Modal/SubModal.vue";
export default {
  name: "gridloader",
  data() {
    return {
      modalShow: false
    };
  },
  components: { MainModal, SubModal }
};
</script>