const prompt = require('prompt-sync')();
const elementosGraficos = require("../elementosGraficos/elementosGraficos");

const opcoesVoltar = {

    opcaoValida: null,
    voltarMenuPrincipal: null,

    mostrarTela: function() {
        var opcaoEscolhida;
        this.opcaoValida = false;
        this.voltarMenuPrincipal = false;
        this.sairSistema = false;

        elementosGraficos.cabecalhoTitulo('Retornar');

        while(!this.opcaoValida) {

            console.log('Opções: ');
            elementosGraficos.espaçamento();

            console.log('1 -> Voltar pra consulta de livros');
            console.log('2 -> Voltar para o menu principal');
            console.log('3 -> Sair do sistema');
            elementosGraficos.espaçamento();

            opcaoEscolhida = Number(prompt('Digite a opção desejada: '))
            elementosGraficos.espaçamento();

            switch (opcaoEscolhida) {
                case 1:
                    this.opcaoValida = true;
                break;

                case 2:
                    this.opcaoValida = true;
                    this.voltarMenuPrincipal = true
                break;
            
                case 3:
                    this.opcaoValida = true;
                    this.voltarMenuPrincipal = true;
                    this.sairSistema = true;
                break;

                default:
                    console.log(`Opção inválida. Por favor, tente novamente.`);
                    elementosGraficos.espaçamento();
        
                    enterParaContinuar.mostrarTela();
                break;
            }
        }
    }
}

module.exports = opcoesVoltar;