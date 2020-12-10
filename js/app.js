$(function () {
  //слайдер сверху
  $('.slider-top').slick({
    arrows: false,
    dots: true
  }); //слайдер сверху

  $('.calendar__slider').slick({
    arrows: true,
    dots: false,
    infinite: false,
    draggable: false,
    variableWidth: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToScroll: 3
      }
    }]
  });

  $('.burger').click(function () {
    $(this).toggleClass('active');
    $('.sidebar').slideToggle();
  });

  $('.otchet__li__level1 span').click(function(){
    if($(this).parent().hasClass('active') == 0){
      $('.otchet__li__level1').removeClass('active')
      $(this).parent().addClass('active')
    }
    else{
      $(this).parent().removeClass('active')
    }
  })

  $('.itemfor').click(function(){
    let $itemId = $(this).attr('data-for')
    $('.otchet__item').removeClass('active')
    $('#'+$itemId+'').addClass('active')
    $('#'+$itemId+'').find('.tab').eq(0).click()
  })



  //страница "помощь"
  $('.help__content').eq(0).addClass('active')
  $('.help__right__item').eq(0).addClass('active')
  let countElem = $('.help__right__item').length
  for(let i = 0; i < countElem; i++ ){
    $('.help__right__item').eq(i).attr('data-index', i);
  }

  $('.help__right__item').click(function(){
    if($(this).hasClass('active')){
      return false
    }else{
      $('.help__right__item').removeClass('active')
      $(this).addClass('active')
      let thisIndex = $(this).attr('data-index')
      $('.help__content').removeClass('active')
      $('.help__content').eq(thisIndex).addClass('active')
      if($(window).width() < 768){
        $('html, body').animate({
            scrollTop: $('.help__left').offset().top  // класс объекта к которому приезжаем
        }, 300);
      }
    }
  })
  if($('.js-validate').length){
    $(".js-validate").validate({
      submitHandler: function(form) {
        $('.contact-page-form').fadeOut()
        $('.contact-susses').fadeIn()
        return false;
      }
    });
    $.validator.messages.required = "Поле должно быть заполнено";
    $.validator.messages.minlength = "Пожалуйста введите минимум 8 символов"
  }

  //архив валют
  if( $('.select').length ){
      $('.select').selectric()
  }

  $('.slideCheckbox').on("change", function() {
        $('.js-usertype input').attr('required') ?
        $('.js-usertype input').removeAttr('required') : $('.js-usertype input').attr('required', 'true');
        $('.js-usertype').slideToggle();
    });

  // календарь
  $('.calendar-more-btn').on('click', function(){
    $(this).toggleClass('active')
    $(this).closest('.calendar__child').toggleClass('active')
    $(this).closest('.calendar__child').find('.calendar__item__h').slideToggle()
  })
});
