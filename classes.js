"use strict";
class Produto {
    constructor(nome, preco, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    infoProduto() {
        console.log("-----Produto registrado-----");
        console.log(`O produto registrado foi um(a) ${this.nome} que custa R$${this.preco} sem desconto.`);
    }
    infoProdutoDesc() {
        console.log("-----Produto registrado com desconto-----");
        console.log(`O produto registrado foi um(a) ${this.nome} que custa R$${this.preco} com desconto de ${this.desconto}%.`);
    }
}
var chaveiro = new Produto("Chaveiro Praia de Ipanema", 15);
var camisa = new Produto("Camisa polo branca", 40, 5);
chaveiro.infoProduto();
camisa.infoProdutoDesc();
class Carro {
    constructor(marca, ano_lancamento, categoria) {
        this.marca = marca;
        this.ano_lancamento = ano_lancamento;
        this.categoria = categoria;
    }
    infoCarro() {
        console.log("-------Carro Registrado------");
        console.log(`O carro registrado foi da marca ${this.marca}, lançado no ano ${this.ano_lancamento} na categoria ${this.categoria}.`);
    }
}
var carro01 = new Carro("Ford", 2019, "Crossover");
carro01.infoCarro();
class Motorista {
    constructor(nome, identidade, cpf, idade, sexo, carro) {
        this.nome = nome;
        this.identidade = identidade;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
        this.carro = carro;
    }
    InfMoto() {
        console.log("-----Informações Publicas do Motorista-----");
        console.log(`O nome do(a) motorista é ${this.nome}, com idade ${this.idade} anos , do sexo ${this.sexo} e dirige o caro ${this.carro.marca}`);
    }
}
var motorista01 = new Motorista("Carlos", "098573", "03274361839", 39, "M", carro01);
motorista01.InfMoto();
console.log("-----Visão total do(a) motorista-----");
console.log(motorista01);
console.log(carro01);
