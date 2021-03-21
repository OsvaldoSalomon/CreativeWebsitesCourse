// Preloader
$(window).on('load', function () { // makes sure that the whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});
