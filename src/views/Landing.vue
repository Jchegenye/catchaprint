<template >
  <div id="landing">
    <img
      src="http://catchaprint.test/wp-content/uploads/2020/03/manja-vitolic-7tOV35hnkao-unsplash-scaled.jpg"
      alt
      class="img-fluid bg"
    />
    <vue-headful :title="this.$root.bloginfo.name" :description="this.$root.bloginfo.description" />
    <!-- header -->
    <div class="landing-header d-flex justify-content-between align-items-center mt-5">
      <div class="ml-5">
        <b-img :src="this.$root.bloginfo.logo" class="logo" fluid :alt="this.$root.bloginfo.name"></b-img>
      </div>
      <div class="mr-5 links d-flex">
        <router-link
          v-bind:to="{ name: 'normal', params: { normal: 'all-images'}}"
          class="px-0 text-capitalize"
        >
          <i class="fab fa-wpexplorer"></i> Explore
        </router-link>
      </div>
    </div>
    <!-- /header -->

    <div class="flex-center position-ref full-height">
      <div class="content">
        <div class="title mb-2">
          <div>
            <h4>Catch A Print</h4>
            <p>Get all images of your choice.</p>

            <b-input-group>
              <template v-slot:prepend>
                <b-form-select v-model="selected" class="mb-0 fa-select">
                  <b-form-select-option :value="null">&#x1F4F7; &nbsp; Select image</b-form-select-option>
                  <b-form-select-option-group label="All images">
                    <b-form-select-option :value="{ A: 'print' }">&#x1F5A8; &nbsp; Print</b-form-select-option>
                    <b-form-select-option :value="{ B: 'phone' }">&#x1F4F1; &nbsp; Phone (iPhone)</b-form-select-option>
                  </b-form-select-option-group>
                </b-form-select>
              </template>

              <b-form-input></b-form-input>

              <template v-slot:append>
                <b-button text="Button" variant="default">
                  &#x1f50d;
                  <span class="sr-only">Search</span>
                </b-button>
              </template>
            </b-input-group>
          </div>
        </div>

        <div class="links" v-if="selected">
          <small class="d-flex align-items-center">
            Searching ... &nbsp;
            <b-spinner small label="Small Spinner"></b-spinner>
            &nbsp;
            {{ selected }}
          </small>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="landing-header-footer text-center align-items-center ml-5">
      <div class>
        <small>Copyright @2020. All Rights Reserved</small>
      </div>
    </div>
    <!-- /footer -->
  </div>
</template>
<script>
export default {
  template: "#landing",
  data() {
    return {
      selected: null
    };
  }
};
</script>