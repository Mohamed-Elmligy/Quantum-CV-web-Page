/* global $, alert, console */

// 1. Simple mode, it styles document scrollbar:
$(function () {

    $("body").niceScroll();

    // chane header height

    $('header .overlay').height($(window).height());

    // scroll to features

    $('header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000)
    });

    //show the hidden images

    $('.showMore').click(function () {

        $('.our-work .hidden').fadeIn(2000)

    });

    //check testi


    var leftArrow = $('.testi .fa-chevron-left'),

        rightArrow = $('.testi .fa-chevron-right');

    function checkClients() {

        if ($('.client:first').hasClass('active')) {

            leftArrow.fadeOut();

        } else {

            leftArrow.fadeIn();
        }

        if ($('.client:last').hasClass('active')) {

            rightArrow.fadeOut();

        } else {

            rightArrow.fadeIn();
        }

    }

    checkClients();

    $('.testi i').click(function () {

        if ($(this).hasClass('fa-chevron-right')) {

            $('.testi .active').fadeOut(100, function () {

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                checkClients();

            });

        } else {

            $('.testi .active').fadeOut(100, function () {

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                checkClients();

            });

        }

    });

});
