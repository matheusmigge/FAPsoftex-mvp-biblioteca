const prompt = require("prompt-sync")();
const bancoLivros = require("../bancoDados/bancoLivros");
const elementosGraficos = require("../elementosGraficos/elementosGraficos");
const enterParaContinuar = require("./enterParaContinuar");

const livrosGeneros = {

    listaOrdemAlfabetica: [],
    livrosFiltrados: [],
    generoEscolhido: '',

    mostrarTela: function() {
        
        // Cria uma lista de gêneros, sem repetições, e ordena em ordem alfabética

        var generosSet = new Set();
        var generosLista = [];
        var opcaoValida = false;

        for (const livro of bancoLivros) {
                
            generosSet.add(livro.genero)
        }

        generosLista = Array.from(generosSet)
        this.listaOrdemAlfabetica = generosLista.sort((a, b) => a.localeCompare(b));

        // Contrói a tela onde o usuário poderá escolher o gênero

        do {

            var contador = 1;
            var opcaoEscolhida;

            elementosGraficos.cabecalhoTitulo(`Busca por gênero`);
            console.log(`Listando todos os gêneros: `);
            elementosGraficos.espaçamento();

            for (const genero of this.listaOrdemAlfabetica) {

                console.log(`${contador} → ${genero}`);
                contador++;
            }
            elementosGraficos.espaçamento();
            
            opcaoEscolhida = Number(prompt(`Digite o gênero desejado: `))

            if (opcaoEscolhida >= 1 && opcaoEscolhida < this.listaOrdemAlfabetica.length+1) {

                opcaoValida = true;

                this.generoEscolhido = this.listaOrdemAlfabetica[opcaoEscolhida-1];

                this.livrosFiltrados = bancoLivros.filter(livro => livro.genero === this.generoEscolhido)

            } else {
                elementosGraficos.espaçamento();
                console.log(`Opção inválida. Por favor, tente novamente.`);

                enterParaContinuar.mostrarTela();
            }
        } while (!opcaoValida);
    }
}

module.exports = livrosGeneros;