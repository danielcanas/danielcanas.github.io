$(document).ready(function(){

  $("#form").hide();

  $('.tlt').textillate({
    minDisplayTime: 1000,
    in: { effect: 'flipInX', sync: true },
    out :{ delay: 3, effect: 'fadeOut', sync: true},
    loop: true
  });

  $("#contact").click(function(){
    $("#jumbo").fadeOut("slow");
    $("#form").fadeIn("slow");
  });


  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});





});
