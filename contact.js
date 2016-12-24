$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name    = document.getElementById('name')
    var email   = document.getElementById('email')
    var message = document.getElementById('comment')

        $.ajax({
        method: 'POST',
        url: '//formspree.io/danielcanas10@gmail.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
    }
  });
});
