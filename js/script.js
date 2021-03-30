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
});

/* =================================
|   |   |   |   |   Portfolio
====================================  */
$(window).on('load', function () {
    // Initialize Isotope
    $("#isotope-container").isotope({});

    //Filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        // get filter value
        const filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* =================================
|   |   |   |   |   Magnifier
====================================  */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* =================================
|   |   |   |   |   Testimonials
====================================  */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left fa-4x"></i>', '<i class="fa fa-angle-right fa-4x"></i>']
    });
});
/* =================================
|   |   |   |   |   Stats
====================================  */
$(function () {
    $(".counter").counterUp({
        delay: 19,
        time: 3500
    });
});

/* =================================
|   |   |   |   |   Clients
====================================  */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left fa-4x"></i>', '<i class="fa fa-angle-right fa-4x"></i>']
    });
});

/* =================================
|   |   |   |   |   Google Maps
====================================  */
// $(window).on('load', function () {
//     // Map Variables
//     const addressString = '230 Broadway, NY, New York 10007, USA';
//     const myLatLng = {lat:40.712742, lng:-74.005966}
//
//     //1. Render Map
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 11,
//         center: myLatLng
//     });
//
//     // 2. Add Marker
//     const marker = new google.maps.Marker({
//         position: myLatLng,
//         map: map
//     });
// });

/* =================================
|   |   |   |   |   Navigation
====================================  */

/* Show & Hide White Navigation */
$(function () {
    // Show/Hide nav on page load
    showHideNav();

    $(window).scroll(function () {
        // Show/Hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            $("#back-to-top").fadeIn();

        } else {
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            $("#back-to-top").fadeOut();
        }
    }
});






