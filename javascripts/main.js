 if($(window).width() > 768){
        $(".home-page-content").css("height",$(window).height());
    }else{
        $(".home-page-content").css("height","100%");
    }
    $(window).resize(function(){
        if($(window).width() > 768){
            $(".home-page-content").css("height",$(window).height());
        }else{
            $(".home-page-content").css("height","100%");
        }
    });