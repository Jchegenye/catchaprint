
export default {
    data() {
        return {
            widgets: {
                have_a_question: {
                    location: "",
                    phone: "",
                    email: ""
                },
                external_button: {
                    post_title: "",
                    post_name: ""
                },
                footer_blog: [],
                recentPosts: [],
                social_media: []
            }
        };
    },
    created() {
        var _this = this;

        //Recent Posts Widget
        this.$axios
            .get(this.$Endpoint.API_BASE_PATH + "/posts?_embed&per_page=2")
            .then(response => {
                _this.posts = response.data;

                _this.posts.forEach(item => {
                    _this.widgets.recentPosts.push({
                        title: item.title.rendered,
                        date: item.date,
                        author: item._embedded.author[0].name,
                        featured_image: item._embedded["wp:featuredmedia"]["0"].source_url,
                        id: item.id,
                        slug: item.slug
                    });
                    //console.log(item);
                });
            });

        //ACF Widgets
        this.$axios
            .get(this.$Endpoint.API_BASE_PATH_ACF + "/options/options/")
            .then(function (response) {
                //Widget 1
                _this.widgets.have_a_question.location =
                    response.data.acf.have_a_question.location;
                _this.widgets.have_a_question.phone =
                    response.data.acf.have_a_question.phone;
                _this.widgets.have_a_question.email =
                    response.data.acf.have_a_question.email;

                // _this.links = response.data.acf.have_a_question;
                // _this.links.forEach(item => {
                //   _this.widgets.have_a_question.push({
                //     location: item.location,
                //     phone: item.phone,
                //     email: item.email
                //   });
                // });

                //Widget 2
                _this.widgets.external_button.post_title =
                    response.data.acf.external_button.post_title;
                _this.widgets.external_button.post_name =
                    response.data.acf.external_button.post_name;

                //Widget 3
                _this.links = response.data.acf.footer_blog;
                _this.links.forEach(item => {
                    _this.widgets.footer_blog.push({
                        post_title: item.post_title,
                        post_name: item.post_name
                    });
                    //console.log(item);
                });

                //Widget 4
                _this.links = response.data.acf.social_media;
                _this.links.forEach(item => {
                    _this.widgets.social_media.push({
                        social_channel: item.social_channel,
                        social_url: item.social_url
                    });
                });

                //console.log(response.data.acf);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}