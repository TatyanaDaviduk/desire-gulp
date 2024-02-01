$(function () {
    $('.header__btn').on('click',function(){
        $('.rightside-menu').removeClass('rightside-menu--close');
    })
    $('.rightside-menu__close').on('click',function(){
        $('.rightside-menu').addClass('rightside-menu--close');
    })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true, // плавный переход
        autoplay: true

    });

    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false
    });

    $('.artical-slider__box').slick({
        prevArrow: '<button type="button" class="artical-slider__arrow artical-slider__arrowLeft"><img src="images/arrow-slider-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="artical-slider__arrow artical-slider__arrowRight"><img src="images/arrow-slider-right.svg" alt="arrow right"></button>'
    });

    var mixer = mixitup('.gallery__inner',{
        load:{
            filter: '.living'
        }
    });
})


