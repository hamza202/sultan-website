if ($('.my-owl-carousel').length){
    $('.my-owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
            },
            900: {
                items: 3,
            },
            1200: {
                items: 4,
                nav: true,
            }
        }
    });
}
if ($('.my-owl-carousel2').length){
    $('.my-owl-carousel2').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    })
}