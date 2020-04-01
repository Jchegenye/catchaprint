<template>
  <div>
    <!-- <div
      v-for="(post_modal, index) in $root.filteredModal.slice($root.count)"
      :key="index"
      class="card"
    >-->
    <b-modal
      v-bind:id="'extra-gallery-'+post_modal.id"
      centered
      size="xl"
      hide-footer
      hide-header
      no-close-on-backdrop
      modal-class="modal submodal"
    >
      <template>
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-md-12 p-0">
              <div class="img-box">
                <img
                  v-bind:src="post_modal.featured_image"
                  v-bind:alt="post_modal.title"
                  class="img-fluid"
                />
                <div class="text-center">
                  <span class="next" v-if="$root.filterPosts().length-1!=$root.count">
                    <button @click="$root.nextSlide(true,post_modal.id)">next</button>
                  </span>
                  <span class="prev" v-if="$root.count!=0">
                    <button @click="$root.prevSlide(true,post_modal.id)">previous</button>
                  </span>
                </div>
              </div>
              <button
                @click="$bvModal.hide('extra-gallery-'+post_modal.id) || $root.modalActive(false,post_modal.id,index)"
                class="modal-close"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </template>
    </b-modal>
    <!-- </div> -->
  </div>
</template>