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
  $('.service-wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.service-wrapper').find('.tab-item').removeClass('active-tab').hide();
      $('.service-wrapper .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });
});