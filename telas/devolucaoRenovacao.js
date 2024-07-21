const prompt = require('prompt-sync')();
const elementosGraficos = require("../elementosGraficos/elementosGraficos");
const continuacao = require('./enterParaContinuar');
const despedidaSistema = require('./despedidaSistema');
const menuPrincipal = require("./menuPrincipal")

const devolucaoRenovacao = {

    mostrarTela: function() {
        
        elementosGraficos.cabecalhoTitulo('Devolução / Renovação de empréstimos');

        console.log('1 -> Devolver livros');
        console.log('2 -> Renovar empréstimos');
        elementosGraficos.espaçamento();
        menuPrincipal.opcaoEscolhida = Number(prompt('Digite a opção desejada: '))
        elementosGraficos.espaçamento();

        switch (menuPrincipal.opcaoEscolhida) {
            case 1:
                console.log('Para devolver livros, dirija-se ao balcão de devolução.');
                continuacao.mostrarTela();
                despedidaSistema.mostrarTela();
            break;

            case 2:
                console.log('Para renovar empréstimos, dirija-se ao bibliotecário de plantão.');
                elementosGraficos.espaçamento();
                continuacao.mostrarTela();
                despedidaSistema.mostrarTela();
            break;
        
            default:
                console.log('Opção inválida! Tente novamente.');
                elementosGraficos.espaçamento();
                continuacao.mostrarTela();
            break;
        }
    }
}

module.exports = devolucaoRenovacao;