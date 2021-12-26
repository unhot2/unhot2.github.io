/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$('.killeve-more').click(function(){
   if($('.slider-killeve').hasClass('hide')){
       $('.slider-killeve').removeClass('hide');
       $('.killeve-more').html('<i class="far fa-caret-square-up fa-2x"></i>')
       /* slick 설정 */
       $('#slider-div').slick({
            slide: 'div',        //슬라이드 되어야 할 태그 ex) div, li 
            infinite: true,     //무한 반복 옵션     
            slidesToShow: 1,        // 한 화면에 보여질 컨텐츠 개수
            slidesToScroll: 1,        //스크롤 한번에 움직일 컨텐츠 개수
            speed: 1000,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows: true,         // 옆으로 이동하는 화살표 표시 여부
            dots: true,         // 스크롤바 아래 점으로 페이지네이션 여부
            autoplay: false,            // 자동 스크롤 사용 여부
            autoplaySpeed: 4000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            pauseOnHover: false,        // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
            vertical: false,        // 세로 방향 슬라이드 옵션
            prevArrow: "<button type='button' class='slick-prev'>Previous</button>",    // 이전 화살표 모양 설정
            nextArrow: "<button type='button' class='slick-next'>Next</button>",        // 다음 화살표 모양 설정
            dotsClass: "slick-dots",     //아래 나오는 페이지네이션(점) css class 지정
            draggable: true,     //드래그 가능 여부 
        });
   }
   else {
       $('.slider-killeve').addClass('hide');
       $('.killeve-more').html('<i class="far fa-caret-square-down fa-2x"></i>')
   }
})

$('.angelica-more').click(function(){
   if($('.slider-angelica').hasClass('hide')){
       $('.slider-angelica').removeClass('hide');
       $('.angelica-more').html('<i class="far fa-caret-square-up fa-2x"></i>')
       /* slick 설정 */
       $('#slider-div2').slick({
            slide: 'div',        //슬라이드 되어야 할 태그 ex) div, li 
            infinite: true,     //무한 반복 옵션     
            slidesToShow: 1,        // 한 화면에 보여질 컨텐츠 개수
            slidesToScroll: 1,        //스크롤 한번에 움직일 컨텐츠 개수
            speed: 1000,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows: true,         // 옆으로 이동하는 화살표 표시 여부
            dots: true,         // 스크롤바 아래 점으로 페이지네이션 여부
            autoplay: false,            // 자동 스크롤 사용 여부
            autoplaySpeed: 4000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            pauseOnHover: false,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
            vertical: false,        // 세로 방향 슬라이드 옵션
            prevArrow: "<button type='button' class='slick-prev'>Previous</button>",    // 이전 화살표 모양 설정
            nextArrow: "<button type='button' class='slick-next'>Next</button>",        // 다음 화살표 모양 설정
            dotsClass: "slick-dots",     //아래 나오는 페이지네이션(점) css class 지정
            draggable: true,     //드래그 가능 여부 
        });
   }
   else {
       $('.slider-angelica').addClass('hide');
       $('.angelica-more').html('<i class="far fa-caret-square-down fa-2x"></i>')
   }
   
})


