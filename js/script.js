/* =================================
|   |   |   |   |   Preloader
====================================  */
$(window).on('load', function () { // makes sure that the whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* =================================
|   |   |   |   |   Team
====================================  */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left fa-4x"></i>', '<i class="fa fa-angle-right fa-4x"></i>']
    });
});

/* =================================
|   |   |   |   |   Progress Bars
====================================  */
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
/* =================================
|   |   |   |   |   Responsive Tabs
====================================  */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
})











