<template>
  <div>
    <div>
      <div
        v-for="(post_modal, index) in $root.filteredModal.slice($root.count)"
        :key="index"
        class="card"
      >
        <b-modal
          v-bind:id="'gallery-'+post_modal.id"
          centered
          size="xl"
          hide-footer
          hide-header
          no-close-on-backdrop
        >
          <template>
            <div class="container-fluid p-0">
              <div class="row">
                <div class="col-md-9 p-0">
                  <button
                    v-b-tooltip.hover.topright="'Extra zoom in'"
                    v-b-modal="'extra-gallery-'+post_modal.id"
                    @click="$root.modalActiveZoom(true,post_modal.id,index)"
                    class="zoom2"
                  >
                    <i class="fas fa-search-plus"></i>
                  </button>

                  <div class="img-box">
                    <img
                      v-bind:src="post_modal.featured_image"
                      v-bind:alt="post_modal.title"
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="col-md-3 p-0">
                  <button
                    @click="$bvModal.hide('gallery-'+post_modal.id) || $root.modalActive(false,post_modal.id,index)"
                    class="modal-close"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                  <div class="content-box">
                    <div class="header-content">
                      <small class="blockquote-footer pb-1">{{post_modal.cat_name}}</small>
                      <h4>{{post_modal.title}}</h4>
                      <p v-html="post_modal.excerpt"></p>
                      <div class="my-2" v-if="post_modal.mytags">
                        <b-badge
                          class="mr-2"
                          variant="dark"
                          v-for="(tag, index) in post_modal.mytags"
                          :key="index"
                        >
                          <router-link
                            v-bind:to="{ name: 'tag', params: { tag: tag.slug}}"
                          >{{tag.name}}</router-link>
                        </b-badge>
                      </div>
                    </div>
                    <div class="footer-content">
                      <hr class="mb-4 mt-4" />
                      <router-link v-bind:to="{path: '#'}" class="actions">
                        <i class="fas fa-shopping-bag"></i> Buy
                      </router-link>
                      <router-link v-bind:to="{path: '#'}" class="actions">
                        <i class="far fa-share-square"></i> Share
                      </router-link>
                      <router-link v-bind:to="{path: '#'}" class="actions">
                        <i class="far fa-bookmark"></i> Bookmark
                      </router-link>

                      <div class="pt-2">
                        <span class="next" v-if="$root.filterPosts().length-1!=$root.count">
                          <button @click="$root.nextSlide(true,post_modal.id)">next</button>
                        </span>
                        <span class="prev" v-if="$root.count!=0">
                          <button @click="$root.prevSlide(true,post_modal.id)">previous</button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </b-modal>
      </div>
    </div>
  </div>
</template>