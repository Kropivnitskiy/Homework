
$(function() {
  $('.field').hover(function(e) {
    var $input = $(e.target);
    $input.siblings('.tipe').show();
  }, function(e) {
    var $input = $(e.target);
    $input.siblings('.tipe').hide();
  });
  $('.help').click(function() {
    $('.tipe').show()
  });
});

