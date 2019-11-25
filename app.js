var banco = []; // declaração do banco global

function registro(){ // função para guardar os dados do form
    let user = new User();
    user.entrada(nome.value, tel.value, email.value, cpf.value, desc.value);
    let dados = new bancodedados();
    dados.save(user);
}

function search(cpf){ //função para buscar dados do banco
    let dados = new bancodedados();
    dados.search(cpf);
}