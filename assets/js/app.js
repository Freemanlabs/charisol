/*global Slideout*/

$(function(){
  var slideoutDesktop = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu-desktop'),
    'padding': 400,
    'side': 'right',
    'tolerance': 70
  });
  if (document.getElementById('profile')){
    var profilePanel = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('profile'),
      'padding': 400,
      'side': 'left',
      'tolerance': 70
    });
  }
  
  // Toggle buttons
  $('.hamburger').on('click', function() {
    $(this).fadeToggle();
    slideoutDesktop.toggle();
  });
  $('.team .btn-clear-purple').on('click', function() {
    $('.content-cover').fadeIn();
    profilePanel.toggle();
  });

  // close buttons
  $('#menu-desktop .close').on('click', function() {
    $('.hamburger').fadeToggle();
    slideoutDesktop.close();
  });
  $('#profile .close').on('click', function() {
    $('.content-cover').fadeOut();
    profilePanel.close();
  });
});