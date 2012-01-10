<?php

$config = include "../config.php";

$view['js']  = "";
$view['css'] = "";

foreach ($config['js'] as $js) {
    $view['js'] .= '<script type="text/javascript" src="'.$js.'"></script>';
}
foreach ($config['css'] as $css) {
    $view['css'] .= '<link rel="stylesheet" href="'.$css.'" type="text/css">';
}

require "../gui/".$config['tpl'];