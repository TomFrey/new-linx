<?php


// get data from request
//$requestedEnviromentVariable = json_decode(file_get_contents("php://input"));

// Lese die Umgebungsvariable aus
//$envVariable = $_ENV[$requestedEnviromentVariable];
var_dump($_ENV);
$envVariable = $_ENV['GOOGLE_MAPS_API_KEY'];

// Gebe die Umgebungsvariable als JSON-Antwort zurück
header('Content-Type: application/json', true, 200);
echo json_encode(['envVariable' => 'test']);