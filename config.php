<?php
return array (
    
    "js" => array(
		/*
		 * 3rd party libraries
		 */
		"https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",
		"https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js",
		"/js/lib/bootstrap-tabs.js",
		"/js/lib/timeToSeconds.js",
		"/js/lib/gaa.js",
		
		/*
		 * Buissness logic
		 */
		"/js/timeTable.js",
		"/js/timeSlot.js",
		"/js/utility.js",
		"/js/validateLine.js",
		"/js/confToLocalStorage.js",
		"/js/timeTableManeger.js",

		/*
		 * Startoff point
		 */
		"/js/start.js"
	),
    "css" => array(
		"/css/bootstrap.min.css",
		"/css/dev.css"
	),
    "tpl" => "base.tpl.php"
)
?>
