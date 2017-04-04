(function ($) {
  $(function () {
    $('button').click(function () {
      alert("Hi, My name is Brian Q Anderson...");
    });
  });
  $(function() {
    $('#logo').click(function () {
      alert("How do you like my new logo?");
    });
  });
})(jQuery);

// Hide and show nav bar
var didScroll;
var lastScrollTop = 0;
var delta = 40;
var navbarHeight = $('header').outerHeight();
var introHeight = 715;

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
