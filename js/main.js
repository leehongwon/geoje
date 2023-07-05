$(document).ready(function(){
    // all menu popup
    const all_menu = $('.all-menu')
    const all_nav_wrapper = $('.all-nav-wrapper')
    const all_nav_mask = $('.all-nav-mask')
    const all_nav_close = $('.all-nav-close')

    all_menu.click(function(){
        all_nav_wrapper.addClass('all-nav-wrapper-active')
        all_nav_mask.addClass('all-nav-mask-active')
    })

    all_nav_close.click(function(){
        all_nav_wrapper.removeClass('all-nav-wrapper-active')
        all_nav_mask.removeClass('all-nav-mask-active')
    })

    // 모바일 메뉴 기능
    $('.mb-bt').click(function(e){
        e.preventDefault(e);
        $('.mb-bt').toggleClass('mb-bt-open')
        $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
        $('.mb-nav').toggleClass('mb-nav-open')
        $('.mb-menu>li').height(54)
    })

    // 화면 사이즈 체크
    $(window).resize(function(){
        let temp = $(window).width();
        // console.log(temp)
        if(temp > 1220) {
            $('.mb-bt').removeClass('mb-bt-open')
            $('.mb-menu-mask').removeClass('mb-menu-mask-active')
            $('.mb-nav').removeClass('mb-nav-open')
        }else {
            $('.all-nav-wrapper').removeClass('all-nav-wrapper-active')
            $('.all-nav-mask').removeClass('all-nav-mask-active')
        }
    })


    // 모바일 메뉴 펼치기
    // 1. 모바일 메뉴를 불러오기
    const mb_mainmenu = $('.mb-mainmenu')
    // 2. 모바일 서브메뉴 불러오기
    const mb_submenu = $('.mb-submenu')
    // 3. 펼쳐진 서브메뉴의 높이값
    let mb_submenu_height = []
    // 4. 높이값 계산을 실행
    // $.each(배열명, function(index번호, item){할일})
    $.each(mb_submenu, function(index){
        // 각각의 .mb-submenu의 li 개수를 파악
        let count = $(this).find('li').length;
        mb_submenu_height[index] = 51*count+22;
    })
    // console.log(mb_submenu_height)

    // 모바일 메뉴
    let mb_li = $('.mb-menu > li')
    $.each(mb_mainmenu, function(index){
        $(this).click(function(e){
            e.preventDefault();
            // mb-mainmenu-open 이 있으면 펼치고 없으면 닫기
            $(this).toggleClass('mb-mainmenu-open')
            let active = $(this).hasClass('mb-mainmenu-open')
            if(active) {
                // 클릭이 된 경우
                // 해당되는(클릭된) li>a(depth1)의 높이값을 temp에 저장
                let temp = mb_submenu_height[index]
                // 해당요소의 높이 부여
                mb_li.eq(index).height(temp+54)
                // li를 누르면 다른 li 눌린거 닫기
                mb_li.eq(index).siblings().height(54)
            }else {
                //클리깅 안된 경우
                mb_li.eq(index).height(54)
            }
        })
    })

    // 모바일 메뉴 배경을 클릭하면 사라짐
    $('.mb-menu-mask').click(function(){
        // 모바일 버튼 기능 초기화
        $('.mb-bt').removeClass('mb-bt-open')
        $('.mb-menu-mask').removeClass('mb-menu-mask-active')
        $('.mb-nav').removeClass('mb-nav-open')
        $('.mb-menu>li').height(54)
        $('.mb-mainmenu').removeClass('mb-mainmenu-open')
    })

    
    // swiper slide
    var swiper = new Swiper(".sw-visual", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true, //물방울에 클릭
        },
        autoplay: true,  //자동재생
        loop: true,  // 3번에서1번으로 계속 이동
        effect: "fade", 
        speed: 3000, // 1000 -> 1초
    });

    var sw_banner = new Swiper(".sw-banner", {
        slidesPerView: 6,  // 한 화면에 나오는 슬라이드 개수 늘리기
        autoplay: true,   // 자동재생
        loop: true,   // 계속 돌아가게하기
        spaceBetween : 13,  //슬라이드 사이 간격주기
        navigation: {
            nextEl: '.banner-forward',
            prevEl: '.banner-back',
        },
        // swiper 반응형
        breakpoints: {
            1023: {slidesPerView: 6},
            872: {slidesPerView: 5},
            676: {slidesPerView: 4},
            450: {slidesPerView: 3},
            320: {slidesPerView: 2},

        }
    });

    const banner_back = $('.banner-back')
    const banner_play = $('.banner-play')
    const banner_forward = $('.banner-forward')

    banner_play.click(function(){
        $(this).toggleClass('banner-play-start')
        let temp = $(this).hasClass('banner-play-start')
        if(temp) {
            // 슬라이드가 작동안함
            sw_banner.autoplay.stop();
        } else {
            // 슬라이드가 작동함
            sw_banner.autoplay.start();
        }
    })

    // go top 버튼
    $('.gotop').click(function(){
        $('html,body').animate({
            scrollTop : 0
        }, 500)
    })



})
