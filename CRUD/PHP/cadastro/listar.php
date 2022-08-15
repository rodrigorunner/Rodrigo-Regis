<h1>Listar Usuários</h1>
<?php

require __DIR__ . './config.php';

$conn = Database::connectDB();

$sql = "SELECT * FROM usuario";
$stmt = $conn->query($sql);

$results = [];
if($stmt->num_rows > 0) {

    while($row = $stmt->fetch_assoc()) {
        $results[] = $row;
    }

} else {
    echo 'Error: ' . $stmt->error;
}
?>

<table class="table table-hover table-striped">
    <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Nascimento</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>

        <?php foreach($results as $result): ?>
            <tr>
                <td scope="row"><?= $result['nome'] ?></td>
                <td scope="row"><?= $result['email'] ?></td>
                <td scope="row"><?= $result['data_nasc'] ?></td>
                <td>
                    <a class="btn btn-warning" href="?page=editar&id=<?= $result['id'] ?>">Editar</a>
                </td>
                <td>
                    <a class="btn btn-danger" href="?page=deletar&id=<?= $result['id'] ?>">Deletar</a>
                </td>
            </tr>
        <?php endforeach; ?>

    </tbody>
</table>