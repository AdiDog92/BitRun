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
        const id = $(this).data('price'); // Получаем ID целевой вкладки
        const $target = $(id); // Находим целевую вкладку
        const $allWrappers = $('.price__wrapper'); // Все блоки с вкладками
        const $buttons = $('button[data-price]'); // Все кнопки переключения

        // Если вкладка уже активна, ничего не делаем
        if ($(this).hasClass('active')) return;

        // Убираем активный класс у всех кнопок
        $buttons.removeClass('active');
        // Добавляем активный класс текущей кнопке
        $(this).addClass('active');

        // Плавное скрытие всех вкладок
        $allWrappers.css({
            opacity: 0,
            transform: 'translateY(10px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease'
        });

        // Через 300 мс (время анимации) скрываем все вкладки и показываем целевую
        setTimeout(() => {
            $allWrappers.addClass('d-none'); // Скрываем все вкладки
            $target.removeClass('d-none'); // Показываем целевую вкладку

            // Плавное отображение целевой вкладки
            setTimeout(() => {
                $target.css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }, 10); // Небольшая задержка для активации анимации
        }, 300); // Время, соответствующее длительности анимации
    })
})
