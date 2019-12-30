function backToTop() {
    let button = $('.svg');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 150) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 1200);
    })
}
backToTop();

$(window).resize(function () {
    if ($(window).width() <= 1080) {
        $('.header__menu li').removeClass('hvr-underline-from-left');
        $('.header__menu li').removeAttr('style');
    } else {
        $('.header__menu li').addClass('hvr-underline-from-left');
        $('.header__menu').removeAttr('style');
        $('.header__menu li').last().attr('style', 'display:none;');
    };
});


$(function () {
    $('.burger').on('click', () => {

        $('.header__menu').slideToggle();
    });

    $('.header__info-btn').hover(function () {
        if ($('.header__info-btn').hasClass('animated')) {
            $('.header__info-btn').removeClass('animated');
        } else {
            $('.header__info-btn').addClass('animated');
        }

    });

    $(".js-example-basic-single").select2({
        dropdownParent: $('.select2-selection__arrow'),
    });


    $('#select').select2({
        placeholder: "Select Services",
    });

    $('#select.ru').select2({
        placeholder: "Выберите Услуги",
    });

    $('.header__localization').click(function () {
        $('div.dropdown-content').toggle();
        if (!$('.header__localization-arrow').hasClass('rotate')) {
            $('.header__localization-arrow').addClass('rotate');
        } else {
            $('.header__localization-arrow').removeClass('rotate');
        }

    });

    $('.navigation a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body')
                .animate({
                    scrollTop: $(hash).offset().top
                }, 600);
        }
    });

});