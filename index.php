<?php


require 'App/Autoloader.php';

App\Autoloader::register();



if (isset($_GET['page'])) {
    $p = $_GET['page'];
} else {
    $p = "index";
}

ob_start();
if ($p == "index") {
    require "Views/Page/section_1.php";
} else if ($p == "404") {
    App\App::notFound();
}
$content = ob_get_clean();
require 'Views/Template/Default.php';