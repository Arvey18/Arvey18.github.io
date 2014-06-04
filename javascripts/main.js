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

  $(".slide-menu, .close-x").click(function(){
    var body = $('body');
    body.toggleClass('animate-left');
    $(".left-sidebar-container").toggleClass('side-menu-animate-left');
    $(".top-icon").toggleClass('animate-left');
    return false;
  });

  $("body").queryLoader2({
    percentage : true,
    completeAnimation : "fade",
  });

  $('#arrowDownClicker').on('click', function(e){
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 500, function(){
      window.location.hash = hash;
    });
  });

  $('#arrowUp').on('click', function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},500,'swing');
  });

  $(window).scroll(function() {

    var scrollAmmount = $(window).scrollTop();
    var windowHeight = $(window).height();

    if(scrollAmmount > windowHeight - 200) {
      $("#arrowUp").css("visibility", "visible");
    } else {
      $("#arrowUp").css("visibility", "hidden");
    }

  });

});