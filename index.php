<?php

  $name = $_POST['name'];
  $email= $_POST['email'];
  $message = $_POST['message'];
  $to = "danielcanas10@gmail.com";
  $subject = "New Message";

  mail($to, $subject, $message, "From: " . $name);
  echo "Your message has been sent";


?>

<!DOCTYPE html>

<html lang="en-us">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Daniel Canas</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/contact.css">
</head>

  <body>

    <div class="row">
      <div class="col-xs-12">
          <nav class="navbar navbar-default">
            <ul class="nav navbar-nav pull-right">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-4 col-xs-offset-4">

          <form action:"index.php" method:"post">

            <label for="Name" id="name-label">Name/Company:</label>
            <input name="name" type="text" class="form-control" id="name"/>

            <label for="Email" id="email-label">Email:</label>
            <input name:"email" type="text" class="form-control" id="email"/>

            <label for="Message" id="message-label">Message:</label>
            <textarea name:"message" class="form-control" rows="5" id="comment"></textarea>

            <input id="submit" name="submit" type="submit" value="Submit"/>

          </form>

        </div>
      </div>
    </div>

  </body>

</html>
