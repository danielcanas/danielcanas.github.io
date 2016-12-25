$(document).ready(function(){

  $("#form").hide();

  $(".element").typed({
        strings: ["Student.", "Developer.", "Programmer."],
        typeSpeed: 60,
        backspeed: 60,
        loop: true
      });

  $("#contact").click(function(){
    $("#jumbo").fadeOut("slow");
    $("#form").fadeIn("slow");
  });


});
