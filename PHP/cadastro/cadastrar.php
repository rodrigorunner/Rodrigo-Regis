<div class="container">
    <h1>Cadastrar</h1>

    <form action="?page=salvar" method="POST">
        <!-- Enviando todos os dados do formulário de forma oculta -->
        <!-- Assim os dados não vão na url -->
        <input type="hidden" name="acao" value="cadastrar">
        <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" name="nome" id="nome" placeholder="Digite seu nome.">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" name="email" id="email" placeholder="Digite seu email.">
        </div>
        <div class="form-group">
            <label for="senha">Senha</label>
            <input type="password" class="form-control" name="senha" id="senha">
        </div>
        <div class="form-group">
            <label for="nascimento">Data_nasc</label>
            <input type="date" class="form-control" name="nascimento" id="nascimento" placeholder="Digite sua data de nascimento.">
        </div>
        <button class="btn btn-primary mt-2" type="submit">Enviar</button>
    </form>
</div>
