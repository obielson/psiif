class User{
    constructor(){
        this.nome;
        this.telefone;
        this.email;
        this.cpf;
        this.desc;
    }

    entrada(n,t,e,c,d){
        this.nome = n;
        this.telefone = parseFloat(t);
        this.email = e;
        this.cpf = c;
        this.desc = d;
    }
}