const elementosGraficos = require("../elementosGraficos/elementosGraficos");
const livrosConsulta = require("./livrosConsulta");
const continuacao = require("./enterParaContinuar");
const regularizacaoUsuario = require("../checagens/regularizacaoUsuario");

const emprestimo = {

    mostrarTela: function() {

        elementosGraficos.cabecalhoTitulo('Empréstimo de Livro(s)');

        if (regularizacaoUsuario.regularizado) {
            livrosConsulta.mostrarTela()
        } else {
            regularizacaoUsuario.mostrarAviso();
            continuacao.mostrarTela();
        }
    }
}

module.exports = emprestimo;