$(document).ready(() => {

    $('.price__slider').slick({
        dots: false,
        infinite: true,
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="bi bi-caret-right-fill"></i></button>',
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="bi bi-caret-left-fill"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
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
            $allWrappers.addClass('d-none');
            $target.removeClass('d-none');

            setTimeout(() => {
                $target.css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }, 10);
        }, 300);
    })

    $('.advantages__slider').slick({
        // centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        appendArrows: $('.slider__button-wrapper'),
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="bi bi-caret-right-fill"></i></button>',
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="bi bi-caret-left-fill"></i></button>',
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });
})
