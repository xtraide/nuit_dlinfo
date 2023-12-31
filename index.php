<?php

use App\App;

require 'App/Autoloader.php';

\App\Autoloader::register();



if (isset($_GET['page'])) {
    $p = $_GET['page'];
} else {
    $p = "index";
}


ob_start();
if ($p == "index") {
    APP::setTitle();

    require "Views/Page/trueArticle.php";
    require "Views/Page/fake_news.php";
} else if ($p == "404") {
    App::getTitle("Page Not Found");
    App::notFound();
}

$content = ob_get_clean();
require 'Views/Template/Default.php';
