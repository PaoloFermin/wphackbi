/*=======================================================================================
 * Author        : Graph Theme
 * Template Name : Parsnal |Apps One Page HTML Template 
 * File          : Custom js files
 *============================================================================================= */
/*manu bar click scroll*/
$('.header_manu a').on('click', function () {
    $(this).addClass('current').parent().siblings().find('a').removeClass('current');
});
/******top to bottom part start******/
$(document).ready(function () {
$offset = $('.navbar-default').offset().top;
});
$gap = 500;
$gape = 5;
$('.top_to').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 100);
});
$(window).scroll(function () {
    $scrolling = $(this).scrollTop();
    var top = $(".top_to");
    if ($scrolling >= $gap) {
        top.fadeIn();
    } else {
        top.fadeOut();
    }
});
/******top to bottom part end******/

$(window).scroll(function () {
    $scrolling = $(this).scrollTop();
    var navdefault = $(".navbar-default");
    if ($scrolling >= $gape) {
        navdefault.addClass('navbar-custom');
    } else {
        navdefault.removeClass('navbar-custom');
    }

});
/******scroll navbar end******/
$(window).scroll(function () {
    if ($(this).scrollTop() >= $gape) {
        $('nav').addClass("my_sticky");
    } else {
        $('nav').removeClass("my_sticky");
    }
});
/******scroll navbar bacground end******/
/*user review part start*/
$('.sliking').slick({
    dots: true,
    infinite: false,
    nextArrow: false,
    speed: 300,
    slidesToShow: 3,
    /*autoplay: true,*/
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1281,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                arrows: false,
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/*user review part end*/
/******wow activition******/
new WOW().init();

/******video contant start******/
$(function () {
    $('.video_con, modal-body button span').click(function () {
        var iframe = $("iframe");
        iframe.attr('src', iframe.attr('src'));
    });
});
/******video contant end******/
/******gellary carosal start******/
$('.gl-sliking').slick({
    dots: true,
    infinite: false,
    nextArrow: false,
    speed: 300,
    slidesToShow: 4,
    centerPadding: '30px',
    /*autoplay: true,*/
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1281,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                arrows: false,
                centerPadding: '30px',
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/******gellary carosal end******/
/******counter start******/
$('#counter-block').ready(function () {
    var downn = $(".down");
    var activee = $(".active");
    var happyy = $(".happy");
    var ratee = $(".rate");
    downn.animationCounter({
        start: 0,
        end: 500,
        step: 1,
        delay: 3,

    });
    activee.animationCounter({
        start: 0,
        end: 400,
        step: 1,
        delay: 3
    });
    happyy.animationCounter({
        start: 0,
        end: 600,
        step: 1,
        delay: 3
    });
    ratee.animationCounter({
        start: 0,
        end: 499,
        step: 1,
        delay: 3
    });
});
/******counter end******/
/******contact form validation start******/
function check() {
    var name = document.getElementById('na');
    var email = document.getElementById('em');
    var textarea = document.getElementById('text');
    if (name.value == '') {
        alert('Name flied is blank');
        name.focus();
        return false;
    }
    if (email.value == '') {
        alert('Email flied address is blank');
        email.focus();
        return false;
    }
    if (textarea.value == '') {
        alert('Massage flied is blank');
        textarea.focus();
        return false;
    }
}
/******contact form validation end******/
