// How to Use JQuery

// $(selector).action();

$(function () {
    $('h1').slideUp(1000).slideDown(1000).click(function () {
        $('.content').css({
            color: 'darkblue',
            fontSize: 50
        })
    });

    $('#main').css({
        color: 'red',
        fontSize: 25
    });
});

$(window).on("load", function () {
    alert("Window is loaded.");
})
