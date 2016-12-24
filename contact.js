/*$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');

      $.ajax({
        method: 'POST',
        url: '//formspree.io/danielcanas10@gmail.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      });
      e.preventDefault();
      $(this).get(0).reset();

  });
});

/*<form id="contact-form">

  <label for="Name" id="name-label">Name/Company:</label>
  <input name="name" type="text" class="form-control" id="name">

  <label for="Email" id="email-label">Email:</label>
  <input name:"email" type="email" class="form-control" id="email">

  <label for="Message" id="message-label">Message:</label>
  <textarea name:"message" class="form-control contact-input" rows="5" id="message"></textarea>

  <input id="submit" name="submit" type="submit" value="Send">

</form>
