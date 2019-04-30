$(document).ready(function () {

    var sw = $('.screen,.app_screen').width();
    var sh = $('.screen,.app_screen').height();
    var bw = $('#home_but').width();

    function layout_2() {
        $('.screen,.app_screen').css({
            marginLeft: -(sw / 2)
        });

        $('#home_but').css({
            marginLeft: -(bw / 2)
        });
    }
    layout_2();

    $(window).resize(function () {
        sw = $('.screen,.app_screen').width();
        sh = $('.screen,.app_screen').height();
        bw = $('#home_but').width();

        layout_2();
    });

    /*--------------------------시간-------------------------*/
    var today_2 = new Date();
    var dd_2 = today_2.getDate();
    var mm_2 = today_2.getMonth() + 1;
    
    var week=new Array('일요일','월요일','화요일','수요일','목요일','금요일','토요일');
    var day=new Date().getDay();
    var daylabel=week[day];
    
    var time_2 = new Date();
    var hh_2 = time_2.getHours();
    var min_2 = time_2.getMinutes();
    
    
    if (min_2 < 10) {
        min_2 = '0' + min_2;
    }
    
    time_2 = hh_2 + ':' + min_2;
    today_2=mm_2+'월 '+dd_2+'일 '+daylabel
    
    $('#home_time,.time').text(time_2);
    $('#home_date').text(today_2);

    /*------------------------홈에서 메인화면으로 이동----------------------*/
    $('#home_screen').click(function(){
        $('#main_screen').fadeIn();
    });
    
    /*---------------------비행기, 와이파이 모드 설정-----------------------*/
    $('.but_wrap').click(function () {
        $('.circle_but').css({
            left: 0
        });
        $('.circle_but', this).css({
            left: '3.9473vw'
        });

        $('.but_bar').css({
            backgroundColor: '#fff'
        });
        $('.but_bar', this).css({
            backgroundColor: '#3f4754'
        });
    });
    $('.but_wrap').eq(0).click(function () {
        $('.status_icon>img').css({
            display: 'none'
        });
        $('.status_icon > img:nth-child(2)').css({
            display: 'block'
        });

        $('.setting_name').addClass('name_wifi');
        $('.setting_left_in_wrap:nth-child(2) .setting_name').css({
            lineHeight: '6.5789vw'
        });
    });
    $('.but_wrap').eq(1).click(function () {
        $('.status_icon>img').css({
            display: 'none'
        });
        $('.status_icon>img:first-child').css({
            display: 'block'
        });

        $('.setting_name').removeClass('name_wifi');
        $('.setting_left_in_wrap:nth-child(2) .setting_name').css({
            lineHeight: '3.2894vw'
        });
    });
    
    /*----------------클릭시 활성화, 페이지 연결-----------------*/
    $('#setting_background').click(function () {
        $('.setting_right_wrap').css({
            display: 'none'
        });
        $('.setting_right_wrap').eq(0).css({
            display: 'block'
        });

        $('.setting_left_in_wrap').css({
            backgroundColor: 'transparent'
        });
        $(this).css({
            backgroundColor: '#ddf1fb'
        });
    });
    $('#setting_info').click(function () {
        $('.setting_right_wrap').css({
            display: 'none'
        });
        $('.setting_right_wrap').eq(1).css({
            display: 'block'
        });

        $('.setting_left_in_wrap').css({
            backgroundColor: 'transparent'
        });
        $(this).css({
            backgroundColor: '#ddf1fb'
        });
    });

    $('.app_back').click(function () {
        $('.setting_right_wrap').css({
            display: 'none'
        });
        $('.setting_left_in_wrap').css({
            backgroundColor: 'transparent'
        });
    });
    
    /*----------------배경화면 변경----------------*/
    $('.setting_bg').eq(0).click(function () {
        $('#main_screen').css({
            backgroundImage: 'url(img/tab_bg_2.png)'
        });
        
        $('.setting_bg').css({
            border:0
        });
        $(this).css({
            border:'5px solid #3f4754',
            boxSizing:'border-box'
        });
    });
    $('.setting_bg').eq(1).click(function () {
        $('#main_screen').css({
            backgroundImage: 'url(img/tab_bg_3.png)'
        });
        
        $('.setting_bg').css({
            border:0
        });
        $(this).css({
            border:'5px solid #3f4754',
            boxSizing:'border-box'
        });
    });
    $('.setting_bg').eq(2).click(function () {
        $('#main_screen').css({
            backgroundImage: 'url(img/main_screen.png)'
        });
        
        $('.setting_bg').css({
            border:0
        });
        $(this).css({
            border:'5px solid #3f4754',
            boxSizing:'border-box'
        });
    });
    
    /*---------------------콘텐츠 열고 닫기---------------------*/
    $('.app_in_wrap').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {
        var app_i = $(this).attr('data-index');
        if (app_i == 0) {
            $('#app_me').fadeIn();
        } else if (app_i == 1) {
            $('#app_contact').fadeIn();
        } else if (app_i == 2) {
            $('#app_setting').fadeIn();
        } else if (app_i == 3) {
            $('#main_screen').css({
                filter: 'blur(3px)'
            });
            $('#app_life').fadeIn();
        } else if (app_i == 4) {
            $('#app_graphic').fadeIn();
        } else if (app_i == 5) {
            $('#app_hanwha').fadeIn();
        } else if (app_i == 6) {
            $('#app_garglin').fadeIn();
        } else if (app_i == 7) {
            $('#app_file').fadeIn();
        }
    });

    /*---------------------홈버튼 클릭시---------------------*/
    $('#home_but').click(function () {
        $('.app_screen,.setting_right_wrap').fadeOut();
        $('.setting_left_in_wrap').css({
            backgroundColor: 'transparent'
        });
        $('#main_screen').css({
            filter: 'blur(0)'
        }).fadeIn();
    });    
    
     /*----------------graphic 콘텐츠 내 설정----------------*/
    $('.graphic_wrap').hover(function(){
        $('.app_graphic_txt',this).css({
            display:'block',
            backgroundColor:'rgba(0,0,0,0.5)'
        });
    },function(){
        $('.app_graphic_txt',this).css({
            display:'none',
            backgroundColor:'none'
        });
    });


}); //end
