(function($) {

    $.fn.backTop = function(options) {
        
        
        
        var backBtn = this;
        
        var settings = $.extend({
            'position' : 400,
            'speed' : 500,
            'color' : 'white'
        }, options);
        
        //Settings
        
        var position = settings['position'];
        var speed = settings['speed'];
        var color = settings['color'];
        
        if(color == 'white'){
            backBtn.addClass('white');
        } else if(color == 'red'){
            backBtn.addClass('red');
        }else if(color == 'green'){
            backBtn.addClass('green');
        }else{
            backBtn.addClass('black');
        }
        
        backBtn.css({
            'right' : 40,
            'bottom' : 40,
            'position' : 'fixed',
        });
        
        $(document).scroll(function(){
            var pos = $(window).scrollTop();

            if(pos >= position){
                backBtn.fadeIn(speed);
            } else{
                backBtn.fadeOut(speed);
            }
        });
        
        backBtn.click(function(){
            $("html, body").animate({ 
                scrollTop:0 
            }, 
            {
                duration: 1200
            }); 
        });

    }

}(jQuery));