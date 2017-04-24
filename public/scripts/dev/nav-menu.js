$(document).ready(function(){
  $('#menuButton').click(function(){
    $('.menu-button').toggleClass('is-active');
    $('#navmenu').slideToggle();
    console.log('Hamburger clicked');
  });
})
