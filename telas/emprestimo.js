const usuario = require("../checagens/usuario");

const emprestimo = {

    mostrarTela: function() {
        if (usuario.regularizado) {
            console.log('Tela de consulta de livros');
        } else {
            usuario.avisoRegularizacao();
        }
    }
}

module.exports = emprestimo;