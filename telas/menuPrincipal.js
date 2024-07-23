const prompt = require('prompt-sync')();
const elementosGraficos = require('../elementosGraficos/elementosGraficos')

const menuPrincipal = {

    sairSistema: false,
    opcaoEscolhida: 0,

    mostrarTela: function() {
        elementosGraficos.cabecalhoTitulo('Menu principal')
        
        console.log('1 -> Empréstimo de Livro(s)');
        console.log('2 -> Devolução / Renovação de Livro(s)');
        console.log('3 -> Quitação de débito(s)');
        console.log('4 -> Informações');
        console.log('0 -> Sair do sistema');
        elementosGraficos.espaçamento()

        this.opcaoEscolhida = Number(prompt('Digite a opção escolhida: '))
        elementosGraficos.espaçamento();
    }
}

module.exports = menuPrincipal;