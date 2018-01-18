/*global Slideout*/

$(function(){
  var deviceWidth = $(window).width(),
      sliderWidth = 400;
  
  if (deviceWidth <= 425){
    sliderWidth = 300;
    $('#menu-desktop, #profile').addClass('mobile');
  }

  var slideoutDesktop = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu-desktop'),
    'padding': sliderWidth,
    'side': 'right',
    'tolerance': 70
  });
  if (document.getElementById('profile')){
    var profilePanel = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('profile'),
      'padding': sliderWidth,
      'side': 'left',
      'tolerance': 70
    });
  }
  
  // Toggle buttons
  $('.hamburger').on('click', function() {
    $(this).fadeToggle();
    $('#menu-desktop').toggleClass('show');
    slideoutDesktop.toggle();
  });
  $('.team .btn-clear-purple').on('click', function() {
    $('.content-cover').fadeIn();
    $('#profile').toggleClass('show');
    profilePanel.toggle();
  });

  // close buttons
  $('#menu-desktop .close').on('click', function() {
    $('.hamburger').fadeToggle();
    $('#menu-desktop').toggleClass('show');
    slideoutDesktop.close();
  });
  $('#profile .close').on('click', function() {
    $('.content-cover').fadeOut();
    $('#profile').toggleClass('show');
    profilePanel.close();
  });

  //panel height
  if ($(document).height() < $(window).height()){
    $('#panel').css('height', '100vh');
  }
});