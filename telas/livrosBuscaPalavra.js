const prompt = require("prompt-sync")();
const bancoLivros = require("../bancoDados/bancoLivros");
const elementosGraficos = require("../elementosGraficos/elementosGraficos");
const enterParaContinuar = require("./enterParaContinuar");

const livrosBuscaPalavra = {

    livrosFiltrados: [],
    palavraChave: '',
    buscaEncontrada: false,

    mostrarTela: function(atributoPesquisado) {

        elementosGraficos.cabecalhoTitulo(`Busca por ${atributoPesquisado}`);

        this.palavraChave = prompt(`Digite sua pesquisa: `)

        this.livrosFiltrados = bancoLivros.filter(livro => livro[atributoPesquisado].toLowerCase().includes(this.palavraChave.toLowerCase()));

        if (this.livrosFiltrados.length == 0) {

            elementosGraficos.espaçamento();
            console.log(`Não foram encontrados resultados para a busca "${this.palavraChave}". Tente novamente.`);
            
            enterParaContinuar.mostrarTela();
        } else {
            this.buscaEncontrada = true;
        }
    }
}

module.exports = livrosBuscaPalavra;