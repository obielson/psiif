var banco = [];

function registro(){
    let user = new User();
    user.entrada(nome.value, tel.value, email.value, cpf.value, desc.value);
    let dados = new bancodedados();
    dados.save(user);
}

function search(cpf){
    let dados = new bancodedados();
    dados.search(cpf);
}