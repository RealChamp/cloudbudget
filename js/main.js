$(function () {
    $('#select').select2({
        placeholder: "Select Services",
    });

    $('.header__localization').click(function () {
        $('div.dropdown-content').toggle();
        if (!$('.header__localization-arrow').hasClass('rotate')) {
            $('.header__localization-arrow').addClass('rotate');
        } else {
            $('.header__localization-arrow').removeClass('rotate');
        }

    });
});