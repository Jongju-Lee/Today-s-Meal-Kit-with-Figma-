$(function () {
  /* ##### Include html Files ##### */
  /* gnb */
  $(".gnb_include").load("/include/gnb.html");
  /* main_header */
  $(".main_header_include").load("/include/main_header.html");
  /* ##### Category - Accordion ##### */
  $(".category_accordion .detail").eq(0).show();
  $(".category_accordion .title").click(function () {
    // click된것 제외한 나머지 모두 접기
    $(this).siblings(".category_accordion .title").next().stop().slideUp();
    // click된것 접혀있으면 열리고 열려있으면 접기
    $(this).next().stop().slideDown();
    // click된것 제외한 나머지 active 클래스 제거
    $(this).siblings(".category_accordion .title").removeClass("active");
    // click된것 active 클래스 추가
    $(this).addClass("active");
  });
  /* ##### GNB - Focus Transform Color ##### */
  $(".gnb a").click(function () {
    $(this).toggleClass("active");
  });
  /* Clear Button - Search (삭제버튼) */
  $(".search_recent .btn_all_clear").click(function () {
    $(".search .search_recent .item").hide();
  });
  $(".search_recent .btn_clear").click(function () {
    $(this).parent().slideUp();
  });
  /* ##### Clear Button - Cart (삭제버튼) ##### */
  $(".cart .btn_all_clear").click(function () {
    $(".cart_items").slideUp();
  });
  $(".cart .btn_clear").click(function () {
    $(this).parent().parent().slideUp();
  });
  /* ##### Slick Slider - Main ##### */
  /* front_slider */
  $(".front_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });
  /* goods_suggestion Slider */
  $(".goods_suggestion_items").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    autoplay: false,
  });
});
