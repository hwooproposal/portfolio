$(function () {
    // 풀페이지 스크린 설정
    $('#main').fullpage({
        anchors: ["intro", "p1", "p2", "p3", "p4", "p5", "p6", "system", "profile"],
        menu: '.custom_nav',
        scrollOverflow: true, // 스크롤 오버플로우 허용 (필요한 경우)
        navigation: false,

        afterRender: () => {
            mainVisualLine();
        },

        afterLoad: function (origin, destination, direction, trigger) {
            if (destination.index === 0) {
                $('.f_wrap').addClass('on');
                $('.custom_nav li').removeClass('active');
            } else {
                $('.f_wrap').removeClass('on');
                $('.custom_nav li').eq(destination.index).addClass('active');
            }
        },

        onLeave: function (origin, destination, direction, trigger) {
            if (destination.index === 0) {
                mainVisualLine();
            }
        },

        responsiveWidth: 768, // 반응형 설정
        responsiveHeight: 800,

    });

    $('.custom_nav li').click(function () {
        var index = $(this).index() + 1;
        $.fn.fullpage.moveTo(index);
    });

    $('.training .slide_menu>.itm').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
    });

    // 새로고침 시 항상 intro로 이동
    window.onload = function() {
        if (window.location.hash !== '#intro') {
            window.location.hash = 'intro'; // 해시를 intro로 강제 설정
            fullpage_api.moveTo('intro'); // fullPage.js API로 intro 섹션으로 이동
            }
        };
    });

    // 메인 라인 애니메이션 이벤트
    function mainVisualLine() {
        const elements = [
            document.querySelector('.mainVisual .tit p em'),
            document.querySelector('.mainVisual .tit .line2 em'),
            document.querySelector('.mainVisual .tit .line3 em'),
            document.querySelector('.mainVisual .tit .line4 em'),
            document.querySelector('.mainVisual .tit .line5 em')
        ];

    const tl = gsap.timeline();
    
    // 공통 애니메이션 함수 (콜백 함수)
    const animateElement = (element, delay) => {
        tl.from(element, {
            width: 0,
            duration: 2,
            delay: delay
        });
    };

    // 각 요소에 대한 애니메이션 실행
    elements.forEach((element, index) => {
        animateElement(element, index === 0 ? 1 : 0.1);
    });
    
    //메인 페이지 버튼 색상 변화 애니메이션
    $(document).ready(function() {
        $('.enterbtn').hover(
            function() {
                $(this).css('filter', 'hue-rotate(90deg)');
            },
            function() {
                $(this).css('filter', 'none');
            }
        );
    });
}    