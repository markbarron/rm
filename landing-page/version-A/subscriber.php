<?php 

$email = $_POST['EMAIL'];

# SAVE A COPY
$mailcopyfile = 'subscribers.txt';
$fp = fopen($mailcopyfile, "a"); 
fputs($fp, $now . $email . ", ");
fclose($fp);
 
?>