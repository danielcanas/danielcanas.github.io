<?php

  $name = $_POST['name'];
  $email= $_POST['email'];
  $message = $_POST['message'];
  $to = "danielcanas10@knights.ucf.edu";
  $subject = "New Message";

  mail($to, $subject, $message, "From: " . $name);
  echo "Your message has been sent";

?>
