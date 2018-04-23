$(function() {

// Carousel

    $(".main-carousel").flickity({
        // options
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
      });

// Internal Nav/Smooth Scrolling

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;

        $('html, body').animate({
            'scrollTop': $(target).offset().top-117
        }, 750, 'swing', function () {
            });
        });

// Email validation

    $('#email-sub').click(function(e) {
        e.preventDefault();

        var subEmail = $('#email-text').val();
        if (validateEmail(subEmail)) {
            alert("Thanks for subscribing!");
        } else {
            alert("Please enter a valid email.");
        }
    });
});

function validateEmail(subEmail) {
    var filter = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (filter.test(subEmail)) {
        return true;
    } else {
        return false;
    }
}