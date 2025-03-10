$(function () {
  $(".plus-btn").click(function () {
    // クリックされた `.plus-btn` の親要素内の `.accordion__inner` のみ開閉
    $(this).siblings(".accordion__inner").slideToggle();
    $(this).toggleClass("open"); // ボタンの見た目を変更（開閉状態の切り替え）
  });
});
