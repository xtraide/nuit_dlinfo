<?php


require '../App/Autoloader.php';

App\Autoloader::register();


if (isset($_GET['page'])) {
    $p = $_GET['page'];
} else {
    $p = "index";
}

ob_start();
if ($p == "index") {
    require "../App/Views/User/Index.php";
} else if ($p == "404") {
    require "/Views/Page/404.php";
}
$content = ob_get_clean();
require '../App/Views/Template/Default.php';
