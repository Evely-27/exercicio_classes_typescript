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
