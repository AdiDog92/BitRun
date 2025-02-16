$(document).ready(() => {

    $('.price__slider').slick({
        dots: false,
        infinite: true,
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="bi bi-caret-right-fill"></i></button>',
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="bi bi-caret-left-fill"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20px',
                }
            }
        ]
    });

    $('.price').on('click', 'button[data-price]', function () {
        const id = $(this).data('price');
        const $target = $(id);
        const $allWrappers = $('.price__wrapper');
        const $buttons = $('button[data-price]');

        if ($(this).hasClass('active')) return;

        $buttons.removeClass('active');
        $(this).addClass('active');


        $allWrappers.css({
            opacity: 0,
            transform: 'translateY(10px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease'
        });

        setTimeout(() => {

            $('.price__slider').each(function () {
                if ($(this).hasClass('slick-initialized')) {
                    $(this).slick('unslick');
                }
            });

            $allWrappers.addClass('d-none');
            $target.removeClass('d-none');

            setTimeout(() => {
                $target.css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });

                $target.find('.price__slider')
                $('.price__slider').slick({
                    dots: false,
                    infinite: true,
                    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="bi bi-caret-right-fill"></i></button>',
                    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="bi bi-caret-left-fill"></i></button>',
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                centerPadding: '40px',
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                centerPadding: '20px',
                            }
                        }
                    ]
                });

            }, 10);
        }, 300);
    });

    $('.advantages__slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        infinite: true,
        variableWidth: false,
        appendArrows: $('.slider__button-wrapper'),
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="bi bi-caret-right-fill"></i></button>',
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="bi bi-caret-left-fill"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#certificateModal').on('shown.bs.modal', function () {
        $('.ceriticate__slider').slick({
            slidesToShow: 1,
            appendArrows: $('#certificateModal .button-inner'),
            nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="bi bi-caret-right-fill"></i></button>',
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="bi bi-caret-left-fill"></i></button>',

        });
    });

    $('.partners__slider').slick({
        slidesToShow: 7,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.stats__slider').slick({
        autoplay: true,
        arrows: false,
        slidesToShow: 5,
        centerPadding: '-24px',
        centerMode: true,
        autoplaySpeed: 3000,
    })
    new WOW().init();
})
