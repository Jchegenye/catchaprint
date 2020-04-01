<template>
  <div id="heroSlider">
    <carousel :items="1" :nav="false" :autoplay="true">
      <figure class="figure">
        <img src="../../src/assets/images/heroslider/slide-1.jpg" class="figure-img img-fluid" alt />
        <figcaption class="figure-caption content-ab-1170 text-xs-right">
          <h2>Education needs complete Solutions</h2>
          <p>Education is the most powerful tool used to change the world.</p>
          <p>
            <a href="#" class="btn btn-info ext">Contact Us</a>
          </p>
        </figcaption>
      </figure>
      <figure class="figure">
        <img src="../../src/assets/images/heroslider/slide-1.jpg" class="figure-img img-fluid" alt />
        <figcaption class="figure-caption content-ab-1170 text-xs-right">
          <h2>Education needs complete Solutions</h2>
          <p>Education is the most powerful tool used to change the world.</p>
          <p>
            <a href="#" class="btn btn-info ext">Contact Us</a>
          </p>
        </figcaption>
      </figure>
      <figure class="figure">
        <img src="../../src/assets/images/heroslider/slide-1.jpg" class="figure-img img-fluid" alt />
        <figcaption class="figure-caption content-ab-1170 text-xs-right">
          <h2>Education needs complete Solutions</h2>
          <p>Education is the most powerful tool used to change the world.</p>
          <p>
            <a href="#" class="btn btn-info ext">Contact Us</a>
          </p>
        </figcaption>
      </figure>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
  data() {
    return {
      sliders: []
    };
  },
  created() {
    var urlStrACF = this.$Endpoint.API_BASE_PATH_ACF;
    var _this = this;

    this.$axios
      .get(urlStrACF + "/options/options/")
      .then(function(response) {
        _this.slidedata = response.data.acf.sliders;
        _this.slidedata.forEach(item => {
          //if  item.page ==
          _this.sliders.push({
            page: item.page,
            title: item.title,
            cover_image: item.cover_image,
            video_url: item.video_url
          });

          //console.log(item);
        });
        //console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>