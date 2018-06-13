$(function () {
    // Set reveal for elements visible without scroll...
    $('.no-reveal').reveal();
    $(window).bind('scroll', function (e) {
        $('.no-reveal').reveal();
    })
})

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$.fn.reveal = function () {
    $(this).each(function (i) {
        if ($(this).isInViewport()) {
            $(this).removeClass('no-reveal').addClass('reveal');
        }
    })
}