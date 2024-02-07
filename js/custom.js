$(function () {
  // Include html Files
  // gnb
  $(".gnb_include").load("/include/gnb.html");
  // main_header
  $(".main_header_include").load("/include/main_header.html");
  // Category - Accordion
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
  // GNB - Focus Transform Color
  $(".gnb a").click(function () {
    $(this).toggleClass("active");
  });
  // Button - All Clear
  $(".search_recent .btn_all_clear").click(function () {
    // 전체삭제 버튼
    $(".search .search_recent .item").hide();
  });
  // 삭제 버튼 (X버튼)
  $(".search_recent .btn_clear").click(function () {
    $(this).parent().slideUp();
  });
});
