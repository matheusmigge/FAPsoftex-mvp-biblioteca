const elementosGraficos = require("../elementosGraficos/elementosGraficos");

const livrosListagem = {

    listaOrdemAlfabetica: [],

    mostrarTela: function(livros) {

        var contador = 1;
        this.listaOrdemAlfabetica = livros.sort((a, b) => a.titulo.localeCompare(b.titulo));

        for (const livro of this.listaOrdemAlfabetica) {
            
            console.log(`${contador} → ${livro.titulo} - ${livro.autor} - ${livro.genero}`);
            contador++;
        }
        elementosGraficos.espaçamento();
    }
}

module.exports = livrosListagem;