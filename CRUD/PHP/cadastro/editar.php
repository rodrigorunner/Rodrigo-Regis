<?php

    require __DIR__ . './config.php';

    $conn = Database::connectDB();

    $sql = "SELECT * FROM usuario WHERE id = ?";
    $stmt = $conn->prepare($sql);

    $stmt->bind_param("i", $_REQUEST['id']);
    $stmt->execute();
    $results = $stmt->get_result();
    $data = $results->fetch_assoc();

?>

<div class="container">
    <h1>Editar</h1>

    <form action="?page=salvar" method="POST">
        <!-- Enviando todos os dados do formulário de forma oculta -->
        <!-- Assim os dados não vão na url -->
        <input type="hidden" name="acao" value="editar">
        <input type="hidden" name="id" value="<?= $data['id'] ?>">
        <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" value="<?= $data['nome'] ?>" name="nome" id="nome" placeholder="Digite seu nome.">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" value="<?= $data['email'] ?>" name="email" id="email" placeholder="Digite seu email.">
        </div>
        <div class="form-group">
            <label for="nascimento">Data_nasc</label>
            <input type="date" class="form-control"  value="<?= $data['data_nasc'] ?>" name="nascimento" id="nascimento" placeholder="Digite sua data de nascimento.">
        </div>
        <button class="btn btn-primary mt-2" type="submit">Enviar</button>
    </form>
</div>
