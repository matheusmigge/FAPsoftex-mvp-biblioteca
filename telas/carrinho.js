const prompt = require('prompt-sync')();
const elementosGraficos = require("../elementosGraficos/elementosGraficos");
const livrosListagem = require("./livrosListagem");
const opcoesVoltar = require('./opcoesVoltar');

const carrinho = {

    conteudo: [],
    opcapValida: null,

    adicionarLivro: function(livro) {

        this.conteudo.push(livro);
        console.log('Livro adicionado ao carrinho.');
        elementosGraficos.espaçamento();
    },

    removerLivro: function(opcao) {

        this.conteudo.splice(opcao-1,1);
        console.log('Livro removido do carrinho.');
        elementosGraficos.espaçamento();
    },

    deletarCarrinho: function() {

        this.conteudo = [];
    },

    mostrarTela: function() {

        var opcaoEscolhida;
        this.opcapValida = false;

        while(!this.opcapValida) {

            elementosGraficos.cabecalhoTitulo('Carrinho');

            console.log('Estes itens estão no seu carrinho: ');
            elementosGraficos.espaçamento();

            livrosListagem.mostrarTela(this.conteudo)

            console.log('Opções: ');
            elementosGraficos.espaçamento();

            console.log('1 -> Excluir um item');
            console.log('2 -> Adicionar mais um item');
            console.log('3 -> Fazer checkout');
            console.log('0 -> Deletar o carrinho');
            elementosGraficos.espaçamento();

            opcaoEscolhida = Number(prompt('Digite a opção desejada: '))
            elementosGraficos.espaçamento();

            switch (opcaoEscolhida) {
                case 1:
                    opcaoEscolhida = Number(prompt('Digite o número do item a excluir: '))

                    console.log(this.conteudo[opcaoEscolhida-1]);
                    this.removerLivro(opcaoEscolhida)
                    console.log(this.conteudo);

                break;

                case 2:
                    this.opcapValida = true;
                break;

                case 3:
                    this.opcapValida = true;
                break;

                case 0:
                    this.opcapValida = true;
                    this.deletarCarrinho();
                    opcoesVoltar.mostrarTela();

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

module.exports = carrinho;