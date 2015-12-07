<?php
  
  if($_SERVER['REQUEST_METHOD']== 'POST') {
	$to = "alvinroasol@012@gmail.com";
	$subject = $_POST['interest'];
	$message = $_POST['comments'];
	$from = $_POST['fname']."<".$_POST['email'].">";
	$headers = "from: {$from}\n";
	$headers .= "Reply-To: {$from}\n";
	$results = mail($subject, $message, $headers);
	if (mail($subject, $message, $headers)){
    $results ? 'Thank you for your message' : 'message was not successfully sent';
	}
	
  }
?>