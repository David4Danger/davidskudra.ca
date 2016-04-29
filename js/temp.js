$(document).ready(function() {
    $('.row2').hide();
    $('.row1').hide();
    $('.row1').delay(1500).fadeIn(2000);
    var mywindow = $(window);
    var lastScrollTop = mywindow.scrollTop();
    mywindow.scroll(function() {
        var newst = mywindow.scrollTop();
        if (newst > lastScrollTop) {
            $('.row1').delay(500).fadeOut();
            $('.row2').delay(1000).fadeIn();
        } else if (newst < lastScrollTop) {
            $('.row2').delay(500).fadeOut();
            $('.row1').delay(1000).fadeIn();
        };
        lastScrollTop = newst;
    });
})