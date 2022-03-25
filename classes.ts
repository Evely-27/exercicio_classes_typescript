class Produto {
    constructor(public nome:string, public preco:number, public desconto?:number){}

    infoProduto(): void{
        console.log(`O produto registrado foi um(a) ${this.nome} que custa R$${this.preco} sem desconto.`);
	}

    infoProdutoDesc():void{
        console.log(`O produto registrado foi um(a) ${this.nome} que custa R$${this.preco} com desconto de ${this.desconto}%.`);
    }
}
    var chaveiro:Produto = new Produto("Chaveiro Praia de Ipanema", 15);
    var camisa:Produto = new Produto("Camisa polo branca", 40, 5);

    chaveiro.infoProduto(); 
    camisa.infoProdutoDesc();
