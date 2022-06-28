$(function(){
  $('input[type="file"]').styler();
  
  $("#rateYo").rateYo({
    rating: 5,
    starWidth: "45px",
    ratedFill: "#c11e3c",
    fullStar: true,
    spacing: "5px",
  });
  $("#rateYo-rew").rateYo({
    rating: 4,
    starWidth: "45px",
    ratedFill: "#c11e3c",
    spacing: "5px",
    readOnly: true
  });
  $("#rateYo-rew-2").rateYo({
    rating: 4,
    starWidth: "45px",
    ratedFill: "#c11e3c",
    spacing: "5px",
    readOnly: true
  });
  $("#rateYo-rew-3").rateYo({
    rating: 4,
    starWidth: "45px",
    ratedFill: "#c11e3c",
    spacing: "5px",
    readOnly: true
  });
  $('.service-wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.service-wrapper').find('.tab-item').removeClass('active-tab').hide();
      $('.service-wrapper .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });
    $('.menu__btn').on('click', function(){
      $('.menu__list').slideToggle();
  });

  $('.slider__inner').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,

  });

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       200,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
});