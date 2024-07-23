const prompt = require('prompt-sync')();
const elementosGraficos = require("../elementosGraficos/elementosGraficos");
const carrinho = require('./carrinho');
const enterParaContinuar = require('./enterParaContinuar');
const livrosConsulta = require('./livrosConsulta');

const livrosOpcoes = {

    opcaoValida: null,
    livroEscolhido: null,
    voltarMenuPrincipal: null,

    mostrarTela: function(livros) {
        var opcaoEscolhida;
        this.opcaoValida = false;
        this.voltarMenuPrincipal = false;

        while (!this.opcaoValida) {

            elementosGraficos.cabecalhoTitulo('Opções: ');

            console.log('1 -> Adicionar um livro da lista ao carrinho');
            console.log('2 -> Fazer uma nova busca');
            console.log('3 -> Voltar ao menu principal');
            console.log('0 -> Sair do sistema');
            elementosGraficos.espaçamento();

            opcaoEscolhida = Number(prompt('Digite a opção desejada: '))
            elementosGraficos.espaçamento();

            switch (opcaoEscolhida) {
                case 1:
                    opcaoEscolhida = Number(prompt('Digite o número do livro para adicioná-lo ao carrinho: '))
                    elementosGraficos.espaçamento();
                    
                    if (opcaoEscolhida >= 1 && opcaoEscolhida < livros.length+1) {

                        this.opcaoValida = true;
                        this.livroEscolhido = livros[opcaoEscolhida-1];

                        carrinho.adicionarLivro(this.livroEscolhido);
                        carrinho.mostrarTela();

                    } else {
                        console.log(`Opção inválida. Por favor, tente novamente.`);
                        elementosGraficos.espaçamento();
        
                        enterParaContinuar.mostrarTela();
                    }
                break;
                
                case 2:

                    this.opcaoValida = true;
                break;

                case 3:

                    this.opcaoValida = true;
                    this.voltarMenuPrincipal = true;
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

module.exports = livrosOpcoes;