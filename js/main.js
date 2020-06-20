$(document).ready(function () {
    $('.delete-product-in-list').on('click', function () {
        $(this).closest("li").fadeOut( "slow" );
    });

    $('.cart-drop-link, .close-drop').on('click', function (e) {
        $('.cart-drop-container').toggleClass('active');
        e.stopPropagation()
    });
    $('.cart-drop-container').on('click', function (e) {
        e.stopImmediatePropagation();
    });
    $(window).on('click', function () {
        $('.cart-drop-container').removeClass('active');
    });

    if ($('.my-owl-carousel').length) {
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
    if ($('.my-owl-carousel2').length) {
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
    if ($('.slider-for').length) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            // arrows: false,
            draggable: false,
            fade: true,
            asNavFor: '.slider-nav',
            responsive: [
                {
                    breakpoint: 2000,
                    settings: {
                        arrows: false,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                    }
                }
            ]
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            arrows: true,
            vertical: true,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: false,
            focusOnSelect: true
        });

    }


    if ($('.number-cunt').length) {
        $('.minus-btn, .plus-btn').on('click', function (e) {
            var $this = $(e.target),
                input = $this.parent().parent().find('.number-cunt'),
                v = $this.hasClass('minus-btn') ? input.val() - 1 : input.val() * 1 + 1,
                min = input.attr('data-min') ? input.attr('data-min') : 1,
                max = input.attr('data-max') ? input.attr('data-max') : false;
            if (v >= min) {
                if (!max == false && v > max) {
                    return false
                } else input.val(v);
            }
            e.preventDefault();
        });
        $('.number-cunt').on('change', function (e) {
            var input = $(e.target),
                min = input.attr('data-min') ? input.attr('data-min') : 1,
                max = input.attr('data-max'),
                v = input.val();
            if (v > max) input.val(max);
            else if (v < min) input.val(min);
        });
    }


});
