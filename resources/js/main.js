$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:4000,
    arrows:false,
    draggable:false,
    pauseOnHover:false,
    pauseOnFocus:false
  });


var hideNavBar = 0;

$(window).scroll(function(){
var scrollTop = $(this).scrollTop();

if (scrollTop - hideNavBar > 50){
  var navBarHeight = $('.navbar').css('height');

}

$(navBarHeight).animate({top: '-' + navBarHeight},150);

$(hideNavBar) = $(scrollTop);

});

});
