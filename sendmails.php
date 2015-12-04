<?php
/**
 * This example shows sending a message using a local sendmail binary.
 */

 require 'phpmailer/PHPMailerAutoload.php';

$myEmail = $_POST["email"];
$myFirstName = $_POST['fname'];
$myComment = $_POST['comments'];

//Create a new PHPMailer instance
$mail = new PHPMailer;
// Set PHPMailer to use the sendmail transport
$mail->isSendmail();
//Set who the message is to be sent from
$mail->setFrom($myEmail,$myFirstName);
//Set an alternative reply-to address
/*$mail->addReplyTo('replyto@example.com', 'First Last');*/
//Set who the message is to be sent to
$mail->addAddress("alvinroasol2012@gmail.com", "alvsroa");
//Set the subject line
$mail->Subject = 'PHPMailer sendmail test';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML($myComment);
//$mail->Body = $myComment;
//Replace the plain text body with one created manually
$mail->AltBody='altbody';
//Attach an image file
/*$mail->addAttachment('images/phpmailer_mini.png');*/

echo $myEmail."<br />".$myFirstName."<br />".$myComment ;
var_dump($mail->send());

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}

?>
