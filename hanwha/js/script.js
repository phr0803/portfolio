$(document).ready(function(){
    
    var ww=$(window).width();
    var wh=$(window).height();
    
    function layout(){
      
    }
    
    layout();
    
    $(window).resize(function(){
        ww=$(window).width();
        wh=$(window).height();
        layout();
    });
    
}); //end