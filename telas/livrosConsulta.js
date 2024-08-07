const prompt = require('prompt-sync')();
const bancoLivros = require('../bancoDados/bancoLivros');
const elementosGraficos = require('../elementosGraficos/elementosGraficos');
const enterParaContinuar = require('./enterParaContinuar');
const livrosBuscaPalavra = require('./livrosBuscaPalavra');
const livrosGeneros = require('./livrosGeneros');
const livrosListagem = require('./livrosListagem');
const livrosOpcoes = require('./livrosOpcoes');
const opcoesVoltar = require('./opcoesVoltar');

const livrosConsulta = {

    livrosFiltrados: [],
    opcaoValida: null,

    mostrarTela: function() {;

        var opcaoEscolhida;
        this.opcaoValida = false;

        while(!this.opcaoValida) {
            elementosGraficos.cabecalhoTitulo('Consulta de livros');
            console.log('Selecione uma das opções de busca: ');
            elementosGraficos.espaçamento();
            
            console.log('1 -> Listar todos os livros');
            console.log('2 -> Buscar por Gênero');
            console.log('3 -> Buscar por Autor');
            console.log('4 -> Buscar por Título');
            console.log('5 -> Pedir uma sugestão');
            elementosGraficos.espaçamento();

            opcaoEscolhida = Number(prompt('Digite a opção desejada: '))
            elementosGraficos.espaçamento();
         
            switch (opcaoEscolhida) {
                case 1:
                    this.livrosFiltrados = bancoLivros;

                    elementosGraficos.cabecalhoTitulo(`Listando todos os livros do acervo: `);
                break;

                case 2:
                    livrosGeneros.mostrarTela();
                    this.livrosFiltrados = livrosGeneros.livrosFiltrados;

                    elementosGraficos.cabecalhoTitulo(`Listando todos os livros do gênero: ${livrosGeneros.generoEscolhido}`);
                break;

                case 3:
                    livrosBuscaPalavra.mostrarTela('autor');
                    this.livrosFiltrados = livrosBuscaPalavra.livrosFiltrados;

                    if (livrosBuscaPalavra.buscaEncontrada) {
                        this.opcaoValida = true;
                    
                        elementosGraficos.cabecalhoTitulo(`Listando todos os livros com autor: "${livrosBuscaPalavra.palavraChave}"`);
                    }
                break;

                case 4:
                    livrosBuscaPalavra.mostrarTela('titulo');
                    this.livrosFiltrados = livrosBuscaPalavra.livrosFiltrados;

                    if (livrosBuscaPalavra.buscaEncontrada) {
                        elementosGraficos.cabecalhoTitulo(`Listando todos os livros com titulo: "${livrosBuscaPalavra.palavraChave}"`);
                    }
                break;

                case 5:
                    this.opcaoValida = true;

                    elementosGraficos.cabecalhoTitulo(`Sugestão de leitura`);

                    console.log(`Para receber uma sugestão, por favor, consulte o bibliotecário de plantão.`);
                    elementosGraficos.espaçamento();

                    enterParaContinuar.mostrarTela();
                break;
            
                default:
                    console.log(`Opção inválida. Por favor, tente novamente.`);
                    elementosGraficos.espaçamento();

                    enterParaContinuar.mostrarTela();
                break;
            }
            
            if (
                opcaoEscolhida == 1 ||
                opcaoEscolhida == 2 ||
                opcaoEscolhida == 3 ||
                opcaoEscolhida == 4
            ) {
                livrosListagem.mostrarTela(this.livrosFiltrados);
                this.opcaoValida = livrosListagem.opcaoValida
                livrosOpcoes.mostrarTela(this.livrosFiltrados);

                if (livrosOpcoes.voltarMenuPrincipal || opcoesVoltar.voltarMenuPrincipal) {
                    this.opcaoValida = true;
                }
            }
        }
    }
}

module.exports = livrosConsulta;