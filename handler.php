<?php
$name=$_POST['name'];
$visitor_email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];
$email_from='me.benelhadjdjelloul@esi-sba.dz';
$email_subject='New Message From A Client';
$email_body="User Name:$name.\n". 
"Email:$visitor_email.\n".
"Subject:$subject.\n".
"Message:$message.\n";
$to='bhdfateh2@gmail.com';
$headers="From:$email_from\r\n";
$headers .="Reply-to:$visitor_email";
mail($to,$email_subject,$email_body,$headers);
header("Location:index.html");

?>