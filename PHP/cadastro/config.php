<?php

class Database {

    public static function connectDB($database = 'cadastrar') {
        $host = 'localhost';
        $user = 'root';
        $password = '';
        
        $conn = new mysqli($host, $user, $password, $database);
    
        if($conn->connect_error) {
            echo 'Error: ' . $conn->connect_error;
        }
    
        return $conn;
    }


}