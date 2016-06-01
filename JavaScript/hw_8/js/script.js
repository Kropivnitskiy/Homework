
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

<<<<<<< HEAD
=======


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
>>>>>>> 31e25ec0123d786d30269565d513c37aaed22550
