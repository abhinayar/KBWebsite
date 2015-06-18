(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();
    
    
    //CUSTOM JS
    document.querySelector("header").style.backgroundImage = 'url(./img/header/bg_new_scaled.jpg)';
    
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 80) {
            $("#branding").css('background-image', 'url(./img/header/logo_black.png)');
        } else {
            $("#branding").css('background-image', 'url(./img/header/logo_white.png)');
        }
    });
    
    
    $('.problem-carousel-js').carousel({
		      interval: 5000
            });
    
    $('#whatWeDoCarousel').carousel({
		      interval: 50000
            });
    
    $('#whatWeDoCarousel').on('slide.bs.carousel', function(e) {
        var from = $('.tab-style li.active').index();
        var next = $(e.relatedTarget);
        var to =  next.index();
        $('#whatWeDoCarouselButtons').find('li').removeClass('active').eq(to).addClass('active');
    });
    
    $("#IndiaWest").click(function(){
        window.location = $(this).find("a:first").attr("href");
        return false;
    });
    
    $("#Forbes").click(function(){
        window.location = $(this).find("a:first").attr("href");
        return false;
    });
    
    $("#NPR").click(function(){
        window.location = $(this).find("a:first").attr("href");
        return false;
    });
    
    $("#YaleNews").click(function(){
        window.location = $(this).find("a:first").attr("href");
        return false;
    });
    
    $("#CoDesign").click(function(){
        window.location = $(this).find("a:first").attr("href");
        return false;
    });
    
  
    /*$("header").css("background-image", "url(../img/bg_new_scaled.jpg)"); */
        
})(jQuery); // End of use strict

