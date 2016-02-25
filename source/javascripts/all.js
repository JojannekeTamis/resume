//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {

  $('#menu-bars').click(function() {
    $('#sidebar').addClass('opened');
  });

  $('#menu-bars').click(function() {
            $(this).hide();
        });

  $('#menu-close').click(function() {
    $('#sidebar').removeClass('opened');
  });

$('#menu-close').click(function() {
            $('#menu-bars').show();
        });
//
});
