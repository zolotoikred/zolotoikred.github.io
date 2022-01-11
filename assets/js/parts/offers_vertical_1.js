$(function() {

    $('.faq_top').on('click', function() {
        $(this).parent().find('.faq_content').slideToggle();
        $(this).find('.faq_toggle i').toggleClass('closed opened');
        $(this).parent().toggleClass('active');
    })

});
