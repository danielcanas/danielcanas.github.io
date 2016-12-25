$(document).ready(function() {
  $('#contact-form').submit(function(e) {

      e.preventDefault();
      $(this).get(0).reset();

  });
});
