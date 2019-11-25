class bancodedados{
    save(user){
        /* 
        Nesse trecho de código, fará uma verificação e inserção de dados
        */
        if (localStorage.length == 0 || []){
            banco.push(user);
            localStorage.setItem('user', JSON.stringify(banco));
        } else {
            banco = JSON.parse(localStorage.getItem('user'));
            banco.push(user);
            localStorage.setItem('user', JSON.stringify(banco));
        }
    }
    search(cpf){
        /* 
        Nesse trecho de código fará uma busca e retornará os dados guardados
        */
        banco = JSON.parse(localStorage.getItem('user'));
        let back = document.getElementById('infouser');
        let cont = 0;
        let i;
        for(i=0;i<banco.length;i++){
            if (cpf == banco[i].cpf){
                cont = -1;
                back.innerHTML += "<p>Nome: "+ banco[i].nome+ "</p>";
                back.innerHTML += "<p>Telefone: "+ banco[i].telefone+ "</p>";
                back.innerHTML += "<p>Email: "+ banco[i].email+ "</p>";
                back.innerHTML += "<p>Descrição: "+ banco[i].desc+ "</p>";
            }
        }
    }
}