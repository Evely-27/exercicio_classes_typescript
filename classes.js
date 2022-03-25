"use strict";
class Produto {
    constructor(nome, preco, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    infoProduto() {
        console.log(`O produto registrado foi um(a) ${this.nome} que custa R$${this.preco} sem desconto.`);
    }
    infoProdutoDesc() {
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
        console.log("-------Carro------");
        console.log(`O carro registrado foi da marca ${this.marca}, lançado no ano ${this.ano_lancamento} na categoria ${this.categoria}.`);
    }
}
var carro01 = new Carro("Ford", 2019, "Crossover");
carro01.infoCarro();
