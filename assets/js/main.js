$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname
            .replace(/^\//, '') && location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this
                .hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });


    var offset = 400;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.top').fadeIn(duration);
        } else {
            $('.top').fadeOut(duration);
        }
    });
    
    $('.top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1500);
        return false;
    })
});
