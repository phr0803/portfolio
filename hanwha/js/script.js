$(document).ready(function(){
    
    var ww=$(window).width();
    var wh=$(window).height();
    
    $('#top_but').click(function(){
       $('html,body').animate({
           scrollTop:0
       },1500);
        
    });
    
    $(window).resize(function(){
        ww=$(window).width();
        wh=$(window).height();
    });
    
}); //end