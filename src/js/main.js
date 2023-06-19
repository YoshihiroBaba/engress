import '../scss/style.scss';

$(function(){
     // バーガーメニュー
     $(".c-burger-icon").off('click');
     $(".c-burger-icon").on('click', function () {
       $("#c-burger-icon").toggleClass("c-burger-open");
       $(".l-header__burger").toggleClass("u-dis--show");
       $(window).scroll(function(){
         $("#c-burger-icon").removeClass("c-burger-open");
         $(".l-header__burger").removeClass("u-dis--show");
       });

     });
    //アコーディオン
    $(".p-faq__content > dt").off('click');
    $(".p-faq__content > dt").on('click', function() {
        $(this).next().slideToggle(400);
        $(this).find(".c-close").toggleClass("c-open");
    });
});
