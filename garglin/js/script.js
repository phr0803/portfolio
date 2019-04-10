$(document).ready(function () {

    var ww = $(window).width();
    var wh = $(window).height();

    function layout() {
        $('#mask,#main,.section').css({
            width: '100%',
            height: wh
        });
        $('#menu_wrap').css({
            height: wh
        });
        $('#img_wrap').css({
            width: '100%',
            height: wh * 5
        });
    }
    layout();
    

    $('.but').click(function () {
        i = $(this).index();
        $('#img_wrap').animate({
            top: -wh * i
        });
        
        if(i==0){
            if(ww>=500){
               $('#click_wrap').css({
                right: '40px',
                top: '41%'
            });
               }
            if(ww<500){
               $('#click_wrap').css({
                right: '40px',
                top: '38%'
            });
               }
            
        }
        if(i==1){
            $('#click_wrap').css({
                right: '40px',
                top: '45%'
            });
        }
        if(i==2){
            $('#click_wrap').css({
                right: '40px',
                top: '50%'
            });
        }
        if(i==3){
            
            if(ww>=500){
                $('#click_wrap').css({
                right: '40px',
                top: '36%'
            });
            }
            if(ww<500){
                $('#click_wrap').css({
                right: '40px',
                top: '31%'
            });
            }
            
        }
        

        $('.but').css({
            backgroundColor: '#fff'
        });
        $(this).css({
            backgroundColor: '#000'
        });

    });

    var click_num = 0;
    $('#toggle_label').click(function(){
        if(click_num==0){
            $('#menu_wrap').css({
                display:'block'
            });
            click_num++;
        }
    });
    $('#close').click(function () {
        if (click_num == 1) {
            $('#menu_wrap').css({
                display: 'none'
            });
            click_num--;
        }
    });
    

    $(window).resize(function () {

        ww = $(window).width();
        wh = $(window).height();

        layout();

    });
}); //end
