import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import Vuex from 'vuex'
import './plugins/bootstrap-vue'
import App from './App.vue'
import axios from 'axios'
import './registerServiceWorker'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VuePageTransition from 'vue-page-transition'
import ScrollFixedHeader from 'vuejs-scroll-fixed-header'
import moment from 'moment'
import Endpoint from './settings'
import vueHeadful from 'vue-headful'
import VueProgressBar from 'vue-progressbar'
import store from './store'
//import WoocommerceConf from './services/woocommerce'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Vuelidate from 'vuelidate'

//import Global from "./global";

Vue.prototype.moment = moment
Vue.prototype.$axios = axios
Vue.prototype.$Endpoint = Endpoint
//Vue.prototype.$WoocommerceConf = WoocommerceConf

//Filter (Format Dates)
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('MMM DD, YYYY')
  }
});

Vue.use(Vuelidate)
Vue.use(ScrollFixedHeader)
Vue.use(VuePageTransition)
Vue.config.productionTip = false
Vue.component('vue-headful', vueHeadful)
Vue.use(Vuex)

//Remove underscores in title & capitalize
Vue.filter('snakeToTitle', function (str) {
  return str.split('-').map(function (item) {
    return item.charAt(0).toUpperCase() + item.substring(1);
  }).join(' ');
});

//vue-progressbar
const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

//WooCommerce Initialize
const WooCommerce = new WooCommerceRestApi({
  url: 'http://catchaprint.test/',
  consumerKey: 'ck_b7d4b025f78106fb156fe06333a9a82757071f87',
  consumerSecret: 'cs_c2cad3486d064d83ac9a2058d7be027f2a35945d',
  //wpAPI: true,
  version: 'wc/v3',
  //queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
});

Vue.use(VueProgressBar, options)

new Vue({
  data() {
    return {
      bloginfo: {
        name: "",
        url: "",
        description: ""
      },
      posts: [],
      comments: [],
      post: {},
      pagers: [],
      menus: {
        location: {
          header: []
        }
      },
      explores: [],
      //filteredData: [],
      searchQuery: null,
      modalstatus: false,
      current_slide_number: null,
      count: null,
      navigate_btn: false,
      products: null
    }
  },
  created: function () {
    this.updateData();
    this.getBloginfo();
    this.listAllProducts();
  },
  watch: {
    '$route': function (to, from) {
      this.updateData();
    }
  },
  computed: {
    filteredModal: function () {
      var test = [];
      for (var i2 = 0; i2 < this.$root.explores.length; i2++) {
        if (this.$root.explores[i2].cat_slug === this.catSlug[0]["category"] || this.catSlug[0]["normal"]) {
          //if (this.$root.explores[i2].id === this.current_slide_number) {
          this.current_slide_number === this.$root.explores[i2].id;
          test.push(this.$root.explores[i2]);
          //}
        }
      }
      return test;
    },
    catSlug() {
      var $slug = [
        {
          category: this.$root.$route.params.category,
          tag: this.$root.$route.params.tag,
          normal: this.$root.$route.params.normal
        }
      ];
      return $slug;
    },
    exploreName() {
      return this.$root.$route.name;
    },
  },
  methods: {

    nextSlide(navigate_btn, ids) {
      this.count++;
      this.navigate_btn = navigate_btn;
    },
    prevSlide(navigate_btn, id) {
      this.count--;
      this.navigate_btn = navigate_btn;
    },

    modalActive(status, id, index) {
      this.modalstatus = status
      this.current_slide_number = id
      if (this.modalstatus === true) {
        this.count = index
      } else {
        this.count = null
        this.navigate_btn = false
      }
    },

    modalActiveZoom(status, id, index) {
      this.modalstatus = status
      this.current_slide_number = id
      if (this.modalstatus === true) {
        this.count = index
      } else {
        this.count = null
        this.navigate_btn = false
      }
    },

    //Filter and Search
    filterPosts() {
      var filtered = [];
      for (var i = 0; i < this.$root.explores.length; i++) {

        //check search input
        if (!this.searchQuery) {

          //fetch selected categories only
          if (
            this.$root.explores[i].cat_slug === this.catSlug[0]["category"] ||
            this.catSlug[0]["normal"]
          ) {

            filtered.push(this.$root.explores[i]);

          } else {
            //fetch selected tags only
            for (var j = 0; j < this.$root.explores[i].mytags.length; j++) {
              if (
                this.$root.explores[i].mytags[j].slug === this.catSlug[0]["tag"]
              ) {
                filtered.push(this.$root.explores[i]);
              }
            }
          }

        } else {

          //fetch search results
          if (this.$root.explores[i].title.toLowerCase().match(this.searchQuery.toLowerCase()) ||
            this.$root.explores[i].cat_name.toLowerCase().includes(this.searchQuery.toLowerCase())) {
            filtered.push(this.$root.explores[i]);
          } else {
            for (var j = 0; j < this.$root.explores[i].mytags.length; j++) {
              if (this.$root.explores[i].mytags[j].name.toLowerCase().includes(this.searchQuery.toLowerCase())) {
                filtered.push(this.$root.explores[i]);
              }
            }
          }
        }

      }
      return filtered;
    },

    getBloginfo: function () {
      var _this = this;
      var urlStr = this.$Endpoint.API_BASE_PATH;
      var urlStrRoot = this.$Endpoint.API_BASE_PATH_ROOT;
      var urlStrACF = this.$Endpoint.API_BASE_PATH_ACF;
      var urlStrMenu = this.$Endpoint.API_BASE_PATH_MENU;

      //BlogInfo
      axios.get(urlStrRoot)
        .then(function (response) {
          _this.bloginfo.name = response.data.name;
          _this.bloginfo.description = response.data.description;
          _this.bloginfo.url = response.data.url;
          _this.bloginfo.logo = response.data.logo;
        })
        .catch(function (error) {
          console.log(error);
        });

      //Menu (Location: header)
      axios.get(urlStrMenu + "/locations/header/")
        .then(function (response) {
          _this.links = response.data.items;
          _this.links.forEach(item => {
            //Fetch all menus
            _this.menus.location.header.push({
              title: item.title,
              slug: item.slug,
              post_content: item.post_content,
              graphemica_meta: item.graphemica_meta,
              font_awesome_class: item.font_awesome_class,
              child_items: item.child_items
            });
            //console.log(item);
          });
        })
        .catch(function (error) {
          console.log(error);
        });

      //Explores
      axios.get(urlStr + "/posts?_embed&filter[category_name]=")
        .then(function (response) {
          //console.log(response);
          _this.myposts = response.data;
          _this.myposts.forEach(item => {
            _this.explores.push({
              id: item.id,
              title: item.title.rendered,
              excerpt: item.excerpt.rendered,
              slug: item.slug,
              cat_name: item.cats[0].name,
              cat_slug: item.cats[0].slug,
              mytags: item.mytags,
              featured_image: item._embedded["wp:featuredmedia"][0].source_url
            });
          });
        })
        .catch(function (error) {
          console.log(error);
        });

    },

    buildPager: function (headers) {
      var items = headers['x-wp-total'];
      var pages = headers['x-wp-totalpages'];
      var pagers = [];
      for (var i = 0; i < pages; i++) {
        pagers.push((i + 1));
      }
      return pagers;
    },
    updateData: function () {

      if (
        this.$route.name == "post" ||
        this.$route.name == "page" ||
        this.$route.name == "preview"
      ) {
        this.posts = [];
        this.pagers = [];
        this.fetchSinglePost();
      }
      else {
        this.fetchPosts();
      }

    },

    //List all products
    listAllProducts() {
      WooCommerce.get("products")
        .then((response) => {
          //console.log(response.data);
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    fetchSinglePost: function () {

      var urlStr = this.$Endpoint.API_BASE_PATH;
      var _this = this;
      var ajax = {};
      var type = _this.$route.name;

      switch (type) {
        // case "post-single":
        //   ajax = _this.$axios.get(urlStr + '/our_trustees?slug=' + _this.$route.params.slug);
        //   break;
        case "post":
          ajax = _this.$axios.get(urlStr + '/posts?slug=' + _this.$route.params.slug);
          break;
        case "page":
          ajax = _this.$axios.get(urlStr + '/pages?slug=' + _this.$route.params.slug);
          break;
        // case "about":
        //   ajax = _this.$axios.get(urlStr + '/pages?slug=' + _this.$route.params.slug);
        //   break;
        case "preview":
          ajax = _this.$axios.get(urlStrRoot + '/wpvue/preview?id=' + _this.$route.params.id);
          break;
      }

      ajax.then(function (response) {
        _this.post = response.data;
        if (type != 'page' && _this.post.length > 0) {
          _this.fetchComments();
        }
      })
        .catch(function (error) {
          console.log(error);
        });
    },
    fetchPosts: function () {

      var _this = this;
      var postURL = this.$Endpoint.API_BASE_PATH + '/posts?';

      //CATEGORY FILTER
      if (!_this.isEmpty(_this.$route.params)) {
        if (_this.$route.name == 'category') {
          postURL += '&filter[category_name]=' + _this.$route.params.category;
        } else if (_this.$route.name == 'tag') {
          postURL += '&filter[tag]=' + _this.$route.params.tag;
        }
      }
      if (!_this.isEmpty(_this.$route.query)) {
        if (_this.$route.query.term) { //SEARCH
          postURL += '&search=' + _this.$route.query.term;
        }
        if (!isNaN(_this.$route.query.page)) {  //PAGING    
          postURL += '&page=' + _this.$route.query.page;
        }
      }
      //console.log(_this.$route.query);

      //LIMIT TO 3 IN BlogPage - TEMP ONLY!!       
      if (_this.$route.path == '/blog') {
        postURL += '&per_page=3';
      }

      this.$axios.get(postURL)
        .then(function (response) {
          _this.posts = response.data;
          _this.pagers = _this.buildPager(response.headers);
          _this.post = {};
          _this.comments = [];
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    isEmpty: function (obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key))
          return false;
      }
      return true;
    },

  },
  router,
  store,
  render: h => h(App),

}).$mount('#app')

//SideBar Menu
jQuery(function ($) {

  $(document).ready(function () {

    //sidebar
    var trigger = $('.hamburger'),
      overlay = $('.overlay'),
      isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });
    function hamburger_cross() {

      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }
    $('[data-toggle="offcanvas"]').click(function () {
      $('#wrapper').toggleClass('toggled');
    });
  });

  (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


});