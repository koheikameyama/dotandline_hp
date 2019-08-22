$(function () {
    $('.sp_logo').on('click', function () {
        $('#over-lay').fadeIn();
    });
    $('#over-lay').on('click', function (e) {
        if (!$(e.target).hasClass('sp_menu')) {
            $('#over-lay').fadeOut();
        }
    });
});