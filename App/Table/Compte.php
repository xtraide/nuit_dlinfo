<?php

namespace App\Table;

class Compte
{

    private static $database;
    private static $table = "compte";

    public function __construct(\App\Database $db)
    {
        self::$database = $db;

        if (!self::$table) {
            $class_name = explode(DIRECTORY_SEPARATOR, get_called_class());
            self::$table = strtolower(end($class_name));
        }
    }
    public  function getScore()
    {
        return self::$database->prepare("SELECT score FROM " . self::$table);
    }
    /*
    <?php
$app = App\App::getInstance();

$post = $app->getTable('Compte');
var_dump($post->all()); ?>
 */
    public  function all()
    {

        return self::$database->query("SELECT * FROM  " . self::$table);
    }
}
