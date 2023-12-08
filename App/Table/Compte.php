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
    public  function getScore($score)
    {
        return self::$database->prepare("SELECT score FROM" . self::$table . " WHERE id = :id", [":id" => $score]);
    }
    public  function all()
    {
        var_dump(self::$database);
        return self::$database->query("SELECT * FROM  " . self::$table,  get_called_class());
    }
}
