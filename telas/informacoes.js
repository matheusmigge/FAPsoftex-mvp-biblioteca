const prompt = require('prompt-sync')();
const elementosGraficos = require("../elementosGraficos/elementosGraficos")

const informacoes = {

    mostrarTela: function() {

        elementosGraficos.cabecalho();
        console.log('Informações');
        console.log();
        console.log('Aquela Biblioteca');
        console.log('Rua Adelino Frutuoso, 157, Cordeiro, Recife-PE');
        console.log('');
        console.log('Horário de funcionamento');
        console.log('Seg à Sex - 9h às 18h');
        console.log('Sábados - 9h às 12h');
        console.log('');
        console.log('Prazo de devolução de livros');
        console.log('7 dias corridos');
        console.log('');
        console.log('Contato');
        console.log('Telefone: (81) 3456-7890');
        console.log('E-mail: contato@aquelabiblioteca.org');
        elementosGraficos.rodape();

        prompt('Pressione enter para continuar...')
    }
}

module.exports = informacoes;