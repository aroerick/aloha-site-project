$(function() {

    $(".main-carousel").flickity({
        // options
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
      });
      
      $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;

        $('html, body').animate({
            'scrollTop': $(target).offset().top-84
        }, 750, 'swing', function () {
        });
    });
})