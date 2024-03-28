<?php
//ini_set("display_errors",true);   //Fehlermeldungen einschalten
//require __DIR__ .'/vendor/autoload.php';


$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
	case 'GET':
        include_once "envVar/get.php";
		break;

	case 'POST':
		//nicht implementiert
		break;

	case 'DELETE':
		//löschen noch nicht implementiert
		//weil es in php kein delete gibt
		parse_str(file_get_contents("php://input", "r"), $_DELETE);
		break;

	case 'PUT':
		//ändern noch nicht implementiert
		//weil es in php kein put gibt
		parse_str(file_get_contents("php://input", "r"), $_PUT);
		break;
}