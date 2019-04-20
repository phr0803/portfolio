$(document).ready(function () {

    var bg_w = $('.bg').width();
    var bg_h = $('.bg,#mask').height();
    var border_w = $('#border').width();
    var slide_w = $('#mask').width();

    function layout() {
        $('#border').css({
            marginLeft: -(border_w / 2)
        });

        $('.bg,#mask').css({
            marginLeft: -(bg_w / 2),
            marginTop: -(bg_h / 2)
        });

        $('#slide_wrap').css({
            width: slide_w * 3
        });


        $('.sub_folder_img').eq(0).click(function () {
            $('#slide_wrap').animate({
                left: -(slide_w * 1)
            }, 1000);
        });
        $('.sub_folder_img').eq(1).click(function () {
            $('#slide_wrap').animate({
                left: -(slide_w * 2)
            }, 1000);
        });


        $('.back').click(function () {
            $('#slide_wrap').animate({
                left: 0
            }, 1000);
        });
    }

    layout();



    $(window).resize(function () {
        bg_w = $('.bg').width();
        bg_h = $('.bg,#mask').height();
        border_w = $('#border').width();
        slide_w = $('#mask').width();

        layout();
    });


    /*----------------------------------------부팅시작과 끝----------------------------------------*/
    $('#copy').fadeIn(2000);

    $('#loading').animate({
        width: '40%',
    });
    $('#loading').animate({
        width: '50%'
    });
    $('#loading').animate({
        width: '80%'
    }, 4000);
    $('#loading').animate({
        width: '100%'
    }, function () {
        $('#border').fadeOut(500, function () {
            $('#main').fadeIn(3000);
        });
    });


    $('#main').click(function () {
        $('#mask').css({
            display: 'block'
        });
    });


    /*------------------------------------아이콘 배경 활성화-----------------------------------*/
    $('.in_wrap').click(function () {
        $('.in_wrap').css({
            backgroundColor: 'transparent',
            border: 0
        });
        $(this).css({
            backgroundColor: '#ddf1fb',
            border: '1px solid #b0ddf4',
        });
    });
    $('#bg_white').mousedown(function () {
        $('.in_wrap').css({
            backgroundColor: 'transparent',
            border: 0
        });
    });


    $('.upper_folder').click(function () {
        $('.upper_folder').css({
            backgroundColor: 'transparent',
            border: 0,
            padding: 0
        });
        $(this).css({
            backgroundColor: '#ddf1fb',
            border: '1px solid #b0ddf4',
            padding: '10px'
        });
    });
    $('.folder').mousedown(function () {
        $('.upper_folder').css({
            backgroundColor: 'transparent',
            border: 0
        });
    });


    $('.menu_in_wrap').hover(function () {
        $(this).css({
            backgroundColor: '#ddf1fb',
            border: '1px solid #b0ddf4'
        });
    }, function () {
        $(this).css({
            backgroundColor: 'transparent',
            border: 0
        });

    });


    $('.sub_menu_wrap').hover(function () {
        $(this).css({
            backgroundColor: '#ddf1fb',
            border: '1px solid #b0ddf4',
        });
    }, function () {
        $(this).css({
            backgroundColor: 'transparent',
            border: 0
        });

    });

    /*---------------------------------더블클릭시 실행 안내 문구---------------------------------*/

    $('.in_wrap,.upper_folder').mousemove(function (e) {
        var x = e.pageX;
        var y = e.pageY;

        $('.menual').css({
            display: 'block',
            top: y,
            left: x
        });
    }).mouseout(function () {
        $('.menual').css({
            display: 'none'
        });
    });



    /*------------------------------------더블클릭 이벤트-----------------------------------*/
    $('.in_wrap').eq(0).dblclick(function () {
        $('#main_folder').fadeIn(200);
    });
    $('.in_wrap').eq(1).dblclick(function () {
        $('#setting').fadeIn(200);
    });
    $('.in_wrap').eq(2).dblclick(function () {
        $('#bin').fadeIn(200);
    });


    $('.upper_folder').eq(0).dblclick(function () {
        $('#me').fadeIn(200);
    });
    $('.upper_folder').eq(1).dblclick(function () {
        $('#graphic').fadeIn(200);
    });
    $('.upper_folder').eq(2).dblclick(function () {
        $('#portfolio').fadeIn(200);
    });


    /*------------------------------------배경 바꾸기-----------------------------------*/
    $('.bg_img').eq(0).click(function () {
        $('#bg_white').css({
            backgroundImage: 'URL(../img/bg.png)'
        });
    });
    $('.bg_img').eq(1).click(function () {
        $('#bg_white').css({
            backgroundImage: 'url(../img/bg_1.png)'
        });
    });
    $('.bg_img').eq(2).click(function () {
        $('#bg_white').css({
            backgroundImage: 'url(../img/bg_2.png)'
        });
    });


    /*------------------------------------창닫기-----------------------------------*/
    $('.close').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {
        var i = $(this).attr('data-index');
        if (i == 0) {
            $('#main_folder').css({
                display: 'none'
            });
        } else if (i == 1) {
            $('#me').css({
                display: 'none'
            });
        } else if (i == 2) {
            $('#graphic').css({
                display: 'none'
            });
        } else if (i == 3) {
            $('#portfolio').css({
                display: 'none'
            });
        } else if (i == 4) {
            $('#setting').css({
                display: 'none'
            });
        } else if (i == 5) {
            $('#bin').css({
                display: 'none'
            });
        } else if (i == 6) {
            $('#slide_wrap').css({
                left: 0
            });
        } else if (i == 7) {
            $('#slide_wrap').css({
                left: 0
            });
        } else if (i == 8) {
            $('#slide_wrap').css({
                left: 0
            });
        }


    });


    /*------------------------------------메뉴-----------------------------------*/
    $('.bottom_menu_icon').first().click(function () {
        $('#menu').stop().fadeToggle(200);
        $('#sub_menu').fadeOut(200);
    });


    $('#menu_in_wrap_1').hover(function () {
        $('#sub_menu').fadeIn(200);
    }, function () {
        $('#sub_menu').fadeOut(200);
    });

    $('#sub_menu').mouseenter(function () {
        $(this).fadeIn(200);
    });

    $('#menu_in_wrap_2').click(function () {
        $('#mask').fadeOut(500);
        $('#main').fadeIn(500);
    });


    $('.sub_menu_wrap').eq(0).click(function () {
        $('#me').fadeIn(200);
    });
    $('.sub_menu_wrap').eq(1).click(function () {
        $('#graphic').fadeIn(200);
    });
    $('.sub_menu_wrap').eq(2).click(function () {
        $('#portfolio').fadeIn(200);
    });


    $('#bg_white').mousedown(function () {
        $('#menu,#sub_menu').fadeOut(200);
    });



    /*------------------------------------바로가기-----------------------------------*/
    $('.bottom_menu_icon').eq(1).click(function () {
        $('#me').fadeIn(200);
    });
    $('.bottom_menu_icon').eq(2).click(function () {
        $('#graphic').fadeIn(200);
    });
    $('.bottom_menu_icon').eq(3).click(function () {
        $('#portfolio').fadeIn(200);
    });



    /*------------------------------------현재시간날짜-----------------------------------*/
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    var time = new Date();
    var hh = time.getHours();
    var min = time.getMinutes();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }


    if (min < 10) {
        min = '0' + min;
    }


    time = hh + ':' + min;

    today = yyyy + '-' + mm + '-' + dd;

    $('#time').text(time);

    $('#date').text(today);
    
    
    
    /*------------------------------------graphic-----------------------------------*/
    
    $('.graphic_img').hover(function(){
        $('.graphic_txt',this).css({
            display:'block',
            backgroundColor:'rgba(0,0,0,0.5)'
        });
    },function(){
        $('.graphic_txt',this).css({
            display:'none',
            backgroundColor:'none'
        });
    });


}); //end
