$(document).ready(function() {
    $('#landing').delay(1500).fadeIn(1000);

    $('#first').click(function() {
        $('#landing').fadeOut();
        $('#moreinfo').delay(1000).fadeIn();
    });

    $('#second').click(function() {
        $('#moreinfo').fadeOut();
        $('#landing').delay(1000).fadeIn();
    })
})