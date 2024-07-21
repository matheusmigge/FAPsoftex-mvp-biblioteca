const prompt = require('prompt-sync')();
const elementosGraficos = require("../elementosGraficos/elementosGraficos");
const continuacao = require('./enterParaContinuar');

const informacoes = {

    mostrarTela: function() {

        elementosGraficos.cabecalhoTitulo('Informações');

        console.log('Aquela Biblioteca');
        console.log('Rua Adelino Frutuoso, 157, Cordeiro, Recife-PE');
        elementosGraficos.espaçamento();
        console.log('Horário de funcionamento');
        console.log('Seg à Sex: 9h às 18h');
        console.log('Sábados: 9h às 12h');
        elementosGraficos.espaçamento();
        console.log('Prazo de devolução de livros');
        console.log('7 dias corridos');
        elementosGraficos.espaçamento();
        console.log('Contato');
        console.log('Telefone: (81) 3456-7890');
        console.log('E-mail: contato@aquelabiblioteca.org');
        elementosGraficos.espaçamento();

        continuacao.mostrarTela();
    }
}

module.exports = informacoes;