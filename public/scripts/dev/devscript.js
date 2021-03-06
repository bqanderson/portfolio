// (function ($) {
//   $(function () {
//     $('button#hello').click(function () {
//       alert("Hi, My name is Brian Q Anderson...");
//     });
//   });
//   $(function() {
//     $('#logo').click(function () {
//       alert("How do you like my new logo? Do you think its awesome?!");
//     });
//   });
// })(jQuery);

// Hello Modal launch
$('#helloModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

// Hide and show nav bar
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('header').outerHeight();

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
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
};
