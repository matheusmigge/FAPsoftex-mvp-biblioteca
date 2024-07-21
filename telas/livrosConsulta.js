const prompt = require('prompt-sync')();
const bancoLivros = require('../bancoDados/bancoLivros');
const elementosGraficos = require('../elementosGraficos/elementosGraficos');
const enterParaContinuar = require('./enterParaContinuar');
const livrosBuscaPalavra = require('./livrosBuscaPalavra');
const livrosGeneros = require('./livrosGeneros');
const livrosListagem = require('./livrosListagem');

const livrosConsulta = {

    livrosFiltrados: [],

    mostrarTela: function() {

        var opcaoEscolhida;
        var opcaoValida = false;

        do {

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
                    opcaoValida = true;
                    this.livrosFiltrados = bancoLivros;

                    elementosGraficos.cabecalhoTitulo(`Listando todos os livros do acervo: `);
                    livrosListagem.mostrarTela(this.livrosFiltrados);
                break;

                case 2:
                    opcaoValida = true;
                    livrosGeneros.mostrarTela();
                    this.livrosFiltrados = livrosGeneros.livrosFiltrados;

                    elementosGraficos.cabecalhoTitulo(`Listando todos os livros do gênero: ${livrosGeneros.generoEscolhido}`);

                    livrosListagem.mostrarTela(this.livrosFiltrados);
                break;

                case 3:
                    livrosBuscaPalavra.mostrarTela('autor');
                    this.livrosFiltrados = livrosBuscaPalavra.livrosFiltrados;

                    if (livrosBuscaPalavra.buscaEncontrada) {
                        
                        elementosGraficos.cabecalhoTitulo(`Listando todos os livros com autor: "${livrosBuscaPalavra.palavraChave}"`);

                        livrosListagem.mostrarTela(this.livrosFiltrados);
                        opcaoValida = true;
                    }
                break;

                case 4:
                    livrosBuscaPalavra.mostrarTela('titulo');
                    this.livrosFiltrados = livrosBuscaPalavra.livrosFiltrados;

                    if (livrosBuscaPalavra.buscaEncontrada) {
                        elementosGraficos.cabecalhoTitulo(`Listando todos os livros com titulo: "${livrosBuscaPalavra.palavraChave}"`);

                        livrosListagem.mostrarTela(this.livrosFiltrados);
                        opcaoValida = true;
                    }
                break;

                case 5:
                    opcaoValida = true;

                    elementosGraficos.cabecalhoTitulo(`Sugestão de leitura`);

                    console.log(`Para receber uma sugestão, por favor, consulte o bibliotecário de plantão.`);
                    elementosGraficos.espaçamento();

                break;
            
                default:

                    console.log(`Opção inválida. Por favor, tente novamente.`);
                    enterParaContinuar.mostrarTela();
                break;
            }   
        } while (!opcaoValida);
    }
}

module.exports = livrosConsulta;