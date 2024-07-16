const usuario = {
    regularizado: true,

    checar: function(usuario) {
        if(usuario.debito > 0) {
            this.regularizado = false
        }
    },

    avisoRegularizacao: function() {
        console.log('Atenção: você possui débitos em aberto em nosso sistema!');
        console.log('Regularize sua situação assim que possível para poder voltar a usar o serviço de empréstimo de livros.');
        console.log('');
    }
}

module.exports = usuario;