import '../scss/style.scss';

$(function(){
    //アコーディオン
    $(".p-faq__content > dt").off('click');
    $(".p-faq__content > dt").on('click', function() {
        $(this).next().slideToggle(400);
        $(this).find(".c-close").toggleClass("c-open");
    });
});
