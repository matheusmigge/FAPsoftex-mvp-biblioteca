const elementosGraficos = require("../elementosGraficos/elementosGraficos");

const regularizacaoUsuario = {
    regularizado: true,

    checar: function(usuario) {
        if(usuario.debito > 0) {
            this.regularizado = false
        }
    },

    mostrarAviso: function() {
        elementosGraficos.espaçamento();
        console.log('Atenção: você possui débitos em aberto em nosso sistema!');
        console.log('Regularize sua situação assim que possível para poder voltar a usar o serviço de empréstimo de livros.');
        elementosGraficos.espaçamento();
    }
}

module.exports = regularizacaoUsuario;