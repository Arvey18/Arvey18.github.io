$( document ).ready(function() { 

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

  $(".slide-menu").click(function(){

    var body = $('body');
    body.toggleClass('animate-left');
    $(".left-sidebar-container").toggleClass('side-menu-animate-left');
    $(".top-icon").toggleClass('animate-left');
    return false;
  });

});