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
let price_input = $('#price_input');
if (price_input.length) {
    price_input.ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "LYD ",
    });
}
price_input.on("change", function () {
    var $inp = $(this);
    var from = $inp.prop("value"); // reading input value
    var from2 = $inp.data("from"); // reading input data-from attribute

    console.log(from, from2); // FROM value
});