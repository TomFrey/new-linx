<?php
session_start();
ini_set("display_errors",true);   //Fehlermeldungen einschalten
//require __DIR__ .'/../vendor/autoload.php';

$response = Array();


/**
 * Schickt ein E-Mail mit den Formulardaten an
 * info@mitlinxlernen.ch
 *
 */
function sendEMailToMitlinxlernen($data, $txt, $response) {
	$to = 'info@mitlinxlernen.ch';
	$subject = $data->subject;
	$headers = "From: " . $data->email . "\r\n" . "CC: info@mitlinxlernen.ch";
	
	mail($to, $subject, $txt, $headers);

	$row = Array();
	$row['receiver'] =$to;
	$row['subject'] = $subject;
	$row['content'] = $txt;
	$row['headers'] = $headers;

	array_push($response, $row);
	header("Content-type:application/json", true, 200);
	echo  json_encode($response);
}


// get posted data
$data = json_decode(file_get_contents("php://input"));


// Sanitize input data
$data->name = htmlspecialchars($data->name, ENT_COMPAT);
$data->email = htmlspecialchars($data->email, ENT_QUOTES);
$data->message = htmlspecialchars($data->message, ENT_QUOTES);

if ($data->name
    && $data->email
    && $data->message
) {
    $txt = "Eine Nachricht über das Kontakt-Formular von mitLinXlernen AG: " . "\r\n" . "\r\n"
    . "Von:" . "\r\n"
    . $data->name . "\r\n"
    . $data->email . "\r\n"
    . "Nachricht: " . "\r\n" . $data->message . "\r\n";

    // send email
    sendEMailToMitlinxlernen($data, $txt, $response);
} else {
    $response['message'] = 'Missing data in message';

    header("Content-type:application/json", true, 400);
    echo  json_encode($response);
}
