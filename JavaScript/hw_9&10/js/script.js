// select cusel
jQuery(document).ready(function(){
var params = {
        changedEl: ".lineForm select",
        visRows: 4,
        scrollArrows: true
    }
    cuSel(params);
    
    var params = {
        changedEl: "#films",
        scrollArrows: false
    }
    cuSel(params);

// fancybox
$(function() {
  $(".fancybox").fancybox();
});
