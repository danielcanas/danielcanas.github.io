$(document).ready(function() {
  $('#contact-form').submit(function(e) {

    e.preventDefault();
    e.stopImmediatePropagation();
    return false;


  });
});
