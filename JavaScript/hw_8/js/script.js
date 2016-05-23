
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



//     $('input').hover(function () {
//         $(this)
//             .siblings('.tooltip')
//             .fadeToggle()
//             .animate({
//                 fontSize: '12px'
//             });
//     });

//     $('.button').click(function () {
//         $('.tooltip')
//             .fadeToggle()
//             .animate({
//                 fontSize: '12px'
//             });
//     });
// })

// $('#help').on('click', function(){
//   $('.helpmsg').toggleClass('show');
// });

// $('.string').hover(function(){
//   $(this).find('.helpmsg').addClass('show')},
//   function(){
//   $(this).find('.helpmsg').removeClass('show')  
// });