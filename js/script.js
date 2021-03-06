$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 500,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icon/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icon/right-arrow.png"></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    $('.catalog-item__link').each( function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });

    $('.catalog-item__back').each( function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });


    //Modal
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
   
    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

   


    function validateForms(form){
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "????????????????????, ?????????????? ???????? ??????",
                phone: "????????????????????, ?????????????? ???????? ??????????????",
                email: {
                    required: "????????????????????, ?????????????? ???????? email",
                    email: "?????????????????????? ???????????? ?????????? ??????????"
                }
            }
    
        });
    };
    validateForms('#consultation form');
    validateForms('#order form');
    validateForms('#consultation-form');

    $('input[name=phone]').mask("+7 (999) 999-99-99")

  });