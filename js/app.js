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


  $(function() {
  
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });
});



