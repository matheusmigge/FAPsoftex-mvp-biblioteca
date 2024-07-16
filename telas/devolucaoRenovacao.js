const prompt = require('prompt-sync')();
const elementosGraficos = require("../elementosGraficos/elementosGraficos");
const menuPrincipal = require("./menuPrincipal")

const devolucaoRenovacao = {

    mostrarTela: function() {
        
        elementosGraficos.cabecalho();
        console.log('Devolução / Renovação de empréstimos');
        console.log('');
        console.log('1 -> Devolver livros');
        console.log('2 -> Renovar empréstimos');
        elementosGraficos.rodape();
        menuPrincipal.opcaoEscolhida = Number(prompt('Digite a opção desejada: '))

        switch (menuPrincipal.opcaoEscolhida) {
            case 1:
                console.log('Para devolver livros, dirija-se ao balcão de devolução.');
                console.log('');
                menuPrincipal.sairSistema = true;
            break;

            case 2:
                console.log('Para renovar empréstimos, dirija-se ao bibliotecário de plantão.');
                console.log('');
                menuPrincipal.sairSistema = true;
            break;
        
            default:
                console.log('Opção inválida! Tente novamente.');
                console.log('');
            break;
        }
    }
}

module.exports = devolucaoRenovacao;