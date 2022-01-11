$(function() {

    $('.faq_top').on('click', function() {
        $(this).parent().find('.faq_content').slideToggle();
        $(this).find('.faq_toggle').toggleClass('closed opened');
        if ($(this).parent().hasClass('active')) {
            $(this).css('background', '#f7f7f7 !important');
        }
        else {

        }
        $(this).parent().toggleClass('active');
    })

});