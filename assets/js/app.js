/*global Slideout*/

$(function(){
  var slideoutDesktop = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu-desktop'),
    'padding': 400,
    'side': 'right',
    'tolerance': 70
  });
  // Toggle button
  $('.hamburger').on('click', function() {
    $(this).fadeToggle();
    slideoutDesktop.toggle();
  });
  // close button
  $('#menu-desktop .close').on('click', function() {
    // $('.content-cover').fadeOut();
    $('.hamburger').fadeToggle();
    slideoutDesktop.close();
  });
});