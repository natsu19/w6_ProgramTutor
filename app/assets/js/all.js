let navToggle = document.querySelector(".navToggle")
let nav = document.querySelector(".nav")
let navToggleTitle = navToggle.getAttribute("title")

//點漢堡icon時
navToggle.onclick = function(){
  //增加一個active的class
  nav.classList.toggle("active");

  // //修改title的值為收合選單
  if( navToggleTitle === "選單" ){
    navToggle.setAttribute("title", "收合選單");
    navToggleTitle = navToggle.getAttribute("title") 
  }
  // //修改title的值為選單
  else if(navToggleTitle === "收合選單"){
    navToggle.setAttribute("title", "選單");
    navToggleTitle = navToggle.getAttribute("title")
  }
}



var swiperCourse = new Swiper(".swiperCourse", {
  slidesPerView: 'auto', //顯示幾個
  autoplay: true, //自動播放否
  loop: true, // 循环模式选项
});

var swiperShare = new Swiper('.swiperShare', {
  // Optional parameters
  speed:1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiperCourseType = new Swiper(".swiperCourseType", {
  slidesPerView: 'auto', //顯示幾個
  loop: false, // 循环模式选项
});




