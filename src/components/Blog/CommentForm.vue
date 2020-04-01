<template id="comment-form">
  <div class="comment-form-wrap" v-cloak>
    <h3>Leave a comment</h3>

    <div
      v-if="submitted"
      class="alert alert-success"
      role="alert"
    >Thank you. Your comment has been submitted!</div>

    <div v-if="!submitted">
      <div class="form-group">
        <label for="commenter">Name</label>
        <input
          v-model="commenter"
          v-bind:class="{'form-control':true, 'is-invalid' : commenter == '' && commenterBlured}"
          v-on:blur="commenterBlured = true"
        />
        <div class="invalid-feedback">This is required</div>
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          v-model="email"
          v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}"
          v-on:blur="emailBlured = true"
        />
        <div class="invalid-feedback">A valid email is required</div>
      </div>
      <div class="form-group">
        <label for="website">
          Website
          <i>(optional)</i>
        </label>
        <input v-model="website" class="form-control" />
      </div>
      <div class="form-group">
        <label for="content">Comment</label>
        <textarea
          v-model="content"
          v-bind:class="{'form-control':true, 'is-invalid' : content == '' && contentBlured}"
          v-on:blur="contentBlured = true"
        ></textarea>
        <div class="invalid-feedback">This is required</div>
      </div>
      <div class="form-group">
        <a
          type="submit"
          href="#"
          v-on:click.stop.prevent="submit"
          class="btn btn-lg btn-success"
        >Submit</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  template: "#comment-form",
  methods: {
    validEmail: function(email) {
      var re = /\S+@\S+/;
      return re.test(email.toLowerCase());
    },
    validate: function() {
      this.commenterBlured = true;
      this.emailBlured = true;
      this.contentBlured = true;

      if (
        this.commenter !== "" &&
        this.validEmail(this.email) &&
        this.content !== ""
      ) {
        this.valid = true;
      }
    },
    submit: function() {
      var _this = this;
      var urlStr = this.$Endpoint.API_BASE_PATH;

      _this.validate();
      if (_this.valid) {
        this.$axios
          .post(urlStr + "/comments", {
            author_name: _this.commenter,
            author_email: _this.email,
            content: _this.content,
            author_url: _this.website,
            post: _this.$parent.post[0].id
          })
          .then(function(response) {
            _this.submitted = true;
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    } //end submit
  },
  data: function() {
    return {
      commenter: "",
      commenterBlured: false,
      email: "",
      emailBlured: false,
      website: "",
      content: "",
      contentBlured: false,
      valid: false,
      submitted: false
    };
  }
};
</script>