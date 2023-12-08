<?php

namespace App;

use App\Database;
// class factory
class App
{
    private static $instance;
    private  $database;
    private static $title;

    public static function getInstance()
    {
        if (!self::$instance) {
            self::$instance = new App();
        }
        return self::$instance;
    }


    /* Factory method to create a new instance
    
    $c = App::getInstance();
    $c->getTable('table');
    */
    public function getTable($name)
    {
        $class_name = '\\App\\Table\\' . ucfirst($name);
        return new $class_name($this->getDatabase());
    }



    public  function getDatabase()
    {
        $config = Config::getInstance();
        if (!$this->database) {

            $this->database = new Database(
                $config->get('DB_NAME'),
                $config->get('DB_USER'),
                $config->get('DB_PASS'),
                $config->get('DB_HOST')
            );
        }

        return $this->database;
    }

    public static function notFound()
    {
        header('HTTP/1.1 404 Not Found');
        header('location: /Views/User/404.php');
    }

    public static function getTitle()
    {
        return self::$title;
    }

    public static function setTitle($title = "LES CHAMPS-IONS DU MEAUX-DE AVION")
    {
        self::$title = $title;
    }
}
