//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {

  $('#menu-bars').click(function() {
    $('#sidebar').addClass('opened');
    // $('body').addClass('has-sidebar-opened');

  });

  $('#menu-bars').click(function() {
            $(this).hide();
        });

  $('#menu-close').click(function() {
    $('#sidebar').removeClass('opened');
    // $('body').removeClass('has-sidebar-opened');
  });

$('#menu-close').click(function() {
            $('#menu-bars').show();
        });

 $('a[href*="#"]:not([href="#"])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html, body').animate({
         scrollTop: target.offset().top
       }, 1000);
       return false;
     }
   }
 });

// ('.bars').click(function() {
//   $(".menu-container").toggleClass('is-menu-open')
// }, 1500);

});
