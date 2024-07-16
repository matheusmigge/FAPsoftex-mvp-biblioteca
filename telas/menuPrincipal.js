const prompt = require('prompt-sync')();
const elementosGraficos = require('../elementosGraficos/elementosGraficos')

const menuPrincipal = {

    sairSistema: false,
    opcaoEscolhida: 0,

    mostrarTela: function() {
        elementosGraficos.cabecalho()
        console.log('Menu principal');
        console.log('');
        console.log('1 -> Empréstimo de Livro(s)');
        console.log('2 -> Devolução / Renovação de Livro(s)');
        console.log('3 -> Quitação de débito(s)');
        console.log('4 -> Informações');
        console.log('5 -> Sair do sistema');
        elementosGraficos.rodape()

        this.opcaoEscolhida = Number(prompt('Digite a opção escolhida: '))
        elementosGraficos.rodape();
    }
}

module.exports = menuPrincipal;