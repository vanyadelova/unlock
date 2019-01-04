$(document).ready(function () {

    //PRELOADER
    
//          $(function () {
//            $(".preload").fadeOut(2500, function () {
//                $(".content").fadeIn(2000);
//            });
//        });

    $('#loadMoreVersatile').on('click', function () {
        $('#versatile').toggle(500);
    })

    $('#loadMoreProactive').on('click', function () {
        $('#proactive').toggle(500);
    })

    //MENU TOGGLE
    $('#secondMenu').on('click', function () {
        $('#secondMenu').css('color', 'white');
        $("#menu").load('menu.html', function (data) {
            $(this).html(data);
        })
        //                $('#menu').toggleClass('display');
        if ($("#menu").hasClass('fadein')) {
            $('#menu').removeClass('fadein').addClass('fadeout')
            setTimeout(function () {
                $("#menu").addClass('display')
            }, 900);
        } else {
            $('#menu').removeClass('fadeout').addClass('fadein');
            $('#menu').removeClass('display');

        };
        //                debugger
    });

    //MENU RESPONSIVE
    $('#openMenu').on('click', function () {
        $('.halfRight').fadeOut(1000);
        $('.halfLeft').fadeOut(1000);
        setTimeout(function () {
            $(".mainSection").css('display', 'none');
        }, 1600);

        $("#mainMenu").load('menu.html', function (data) {
            $(this).html(data);
        });

        $('#mainMenu').fadeIn(200);
    })

    //PARALLAX EFFECT
    $('.parallax-window').parallax({
        naturalWidth: 600,
        naturalHeight: 400
    });

    //    SCROLL ANIMATIONS
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var lenguages = $(".lenguages").offset().top;
        var skills = $(".skills").offset().top;
        var attitude = $(".attitude").offset().top;
        if (y >= lenguages / 2) {
            $(".socratisQuote").addClass("socratisQuoteFadeIn");
        }
        if (y >= lenguages * 1.2) {
            $(".skills").addClass("skillsFadeIn");
            setTimeout(function () {
                $(".icon").addClass("animated zoomIn");
                $(".icon").css('opacity', '1');
            }, 500)

        }
        if (y >= skills) {
            $(".proactive").addClass("proactiveFadeIn");
            $(".versatile").addClass("proactiveFadeIn");
            $(".proactive").css('opacity', '1');
            $(".versatile").css('opacity', '1');
        }
        if (y >= attitude) {
            $(".education").addClass("educationFadeIn");
            $('.loadMore').addClass('animated zoomIn');
            $(".loadMore").css('opacity', '1');
            setTimeout(function () {
                $(".educationInfo").addClass("animated fadeIn");
            }, 1000)

        }
    });


    //    MOUSEOVER
    function showNAme(onmouse, name) {
        $(onmouse).on('mouseover', function () {
            $(name).addClass('animated fadeInLeft');
        })
    }

    showNAme($('.html5Lenguage'), $('#html5Lenguage'));
    showNAme($('.css3Lenguage'), $('#css3Lenguage'));
    showNAme($('.javascriptLenguage'), $('#javascriptLenguage'));
    showNAme($('.jqueryLenguage'), $('#jqueryLenguage'));
    showNAme($('.sassLenguage'), $('#sassLenguage'));
    showNAme($('.bootstrapLenguage'), $('#bootstrapLenguage'));
    showNAme($('.photoshopLenguage'), $('#photoshopLenguage'));
    showNAme($('.illustratorLenguage'), $('#illustratorLenguage'));

});
