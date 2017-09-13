$(document).ready(function(){
  $('#menuButton').click(function(){
    $('.menu-button').toggleClass('is-active');
    $('#mobile-nav').slideToggle();
  });
});
