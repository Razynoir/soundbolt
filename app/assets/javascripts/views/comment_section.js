Soundbolt.Views.CommentSection = Backbone.View.extend({
  template: JST['comment_section'],
  className: "user-view-focus-comment-section container-fluid",

  initialize: function(options){
    this.collection = options.comments;
    this.listenTo(this.collection, 'sync', this.render.bind(this));
  },

  render: function(){
    var content = this.template({ comments: this.collection });
    this.$el.html(content);
    return this;
  }
})
