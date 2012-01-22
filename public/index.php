<?php

$config = include "../config.php";

$view['js']  = "";
$view['css'] = "";

$tmpJs = array();

foreach ($config['js'] as $js) {
    $tmpJs[] = '"'.$js.'"';
}
$view['js'] = implode(", ", $tmpJs);

foreach ($config['css'] as $css) {
    $view['css'] .= '<link rel="stylesheet" href="'.$css.'" type="text/css">';
}

require "../gui/".$config['tpl'];