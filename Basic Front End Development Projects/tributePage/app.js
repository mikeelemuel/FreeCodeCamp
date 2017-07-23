$(document).ready(function() {
  $('.gallery').featherlightGallery();
});

$.featherlightGallery.prototype.afterContent = function() {
  var caption = this.$currentTarget.find('img').attr('alt');
  this.$instance.find('.caption').remove();
  $('<div class="caption text-center">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
};
