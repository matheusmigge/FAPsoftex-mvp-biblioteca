const usuario = require("../checagens/usuario");
const continuacao = require("./continuacao");

const emprestimo = {

    mostrarTela: function() {
        if (usuario.regularizado) {
            console.log('Tela de consulta de livros');
        } else {
            usuario.avisoRegularizacao();
            continuacao.mostrarTela();
        }
    }
}

module.exports = emprestimo;