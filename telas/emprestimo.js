const usuario = require("../checagens/usuario");
const elementosGraficos = require("../elementosGraficos/elementosGraficos");
const consultaLivros = require("./consultaLivros");
const continuacao = require("./continuacao");

const emprestimo = {

    mostrarTela: function() {

        elementosGraficos.cabecalho();
        console.log('Empréstimo de Livro(s)');
        elementosGraficos.rodape();

        if (usuario.regularizado) {
            consultaLivros.mostrarTela()
        } else {
            usuario.avisoRegularizacao();
            continuacao.mostrarTela();
        }
    }
}

module.exports = emprestimo;