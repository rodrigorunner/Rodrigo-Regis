<?php
require __DIR__ . './config.php';

$conn = Database::connectDB();

switch($_REQUEST['acao']) {

    case 'cadastrar':

        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = md5($_POST['senha']);
        $data_nasc = $_POST['nascimento'];

        $sql = 'INSERT INTO usuario(nome, email, senha, data_nasc)
                VALUES(?,?,?,?)';

        $params = [
            $nome,
            $email,
            $senha,
            $data_nasc
        ];

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssi", ...$params);
        $stmt->execute();

       if($stmt) {
            header('location: ?page=listar');
       } else {
            echo 'Algo deu errado jow.';
       }

    break;

    case 'editar':

        $nome =  $_POST['nome'];
        $email = $_POST['email'];
        $nasc = $_POST['nascimento'];
        $id = $_REQUEST['id'];

        $sql = "UPDATE usuario 
                SET 
                   nome = ?, email = ?, data_nasc = ?
                WHERE
                   id = ?";

        $stmt = $conn->prepare($sql);
        
        $stmt->bind_param('ssii', $nome, $email, $nasc, $id);
        $stmt->execute();

        if($stmt->execute()) {
            header('location: ?page=listar');
        }

    break;
    
}