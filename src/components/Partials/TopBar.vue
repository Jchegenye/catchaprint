<template id="TopBar">
  <div id="title_hamberger" class="row">
    <div class="col-md-6 pl-0 pr-0">
      <div v-if="this.$root.exploreName == 'category'">
        <span v-for="(menu, index) in this.$root.menus.location.header" :key="index">
          <span v-for="(sub_menu, index) in menu.child_items" :key="index">
            <span v-if="sub_menu.slug == $root.catSlug[0]['category']">
              <h4 class="title">
                <span class="inner-title">Explore {{sub_menu.title | snakeToTitle}}</span>
                <span class="text-lowercase">Category</span>
              </h4>
              <small class="mb-0 blockquote-footer" v-html="sub_menu.post_content"></small>
            </span>
          </span>
        </span>
      </div>
      <div v-else-if="this.$root.exploreName == 'normal' ">
        <span v-for="(menu, index) in this.$root.menus.location.header" :key="index">
          <span v-if="menu.slug == $root.catSlug[0]['normal']">
            <h4 class="title">
              <span class="inner-title">Explore</span>
              <span class="text-lowercase">{{menu.title | snakeToTitle}}</span>
            </h4>
            <small class="mb-0 blockquote-footer" v-html="menu.post_content"></small>
          </span>
        </span>
      </div>
      <div v-else-if="this.$root.exploreName == 'tag'">
        <h4 class="title">
          <span class="inner-title">Explore {{$root.catSlug[0]['tag'] | snakeToTitle}}</span>
          <span class="text-lowercase">Tag</span>
        </h4>
        <small class="mb-0 blockquote-footer">
          You are exploring
          <span
            class="secondary-color text-bold"
          >{{$root.catSlug[0]['tag'] | snakeToTitle}}</span> Images.
        </small>
      </div>
      <div v-else>
        <h4 class="title">
          <span class="inner-title">Explore</span>
          <span class="text-lowercase">{{this.$root.exploreName | snakeToTitle}}</span>
        </h4>
        <small
          class="mb-0 blockquote-footer"
        >You are exploring {{this.$root.exploreName | snakeToTitle}}</small>
      </div>
    </div>
    <div class="col-md-6 text-right m-auto">
      <div class="right-draw">
        <span class="input-group">
          <input
            type="text"
            class="form-control"
            v-model="$root.searchQuery"
            placeholder="Search ..."
            aria-label="Search ..."
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </span>
        <span class="mr-4 ml-4">
          <router-link
            v-bind:to="{ name: 'shopping-cart', params: { shopping_cart: 'shopping-cart'}}"
            title="Your shopping bag"
          >
            <span class="draw-counter">
              <i class="fas fa-shopping-bag"></i>
              <span class="count">8</span>
            </span>
          </router-link>
        </span>
        <span class>
          <router-link
            v-bind:to="{ name: 'bookmark', params: { bookmark: 'bookmark'}}"
            title="Your Bookmark"
          >
            <i class="fas fa-bookmark"></i>
            <span class="count">8</span>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>