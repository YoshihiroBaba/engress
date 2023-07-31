import "../scss/style.scss";
import ScrollHint from "scroll-hint";

$(function () {
  // バーガーメニュー
  $(".c-burger-icon").off("click");
  $(".c-burger-icon").on("click", function () {
    $("#c-burger-icon").toggleClass("c-burger-open");
    $(".l-header__burger").toggleClass("u-dis--show");
    $(window).scroll(function () {
      $("#c-burger-icon").removeClass("c-burger-open");
      $(".l-header__burger").removeClass("u-dis--show");
    });
  });
  //アコーディオン
  $(".l-faq__content > dt").off("click");
  $(".l-faq__content > dt").on("click", function () {
    $(this).next().slideToggle(400);
    $(this).find(".c-close").toggleClass("c-open");
  });
});

//スクロールヒント
window.onload = function () {
  new ScrollHint(".l-list__scroll", {
    i18n: {
      scrollable: "スクロールできます",
    },
  });
};
