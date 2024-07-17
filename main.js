const boasVindas = require('./telas/boasVindas')
const login = require('./telas/login')
const usuario = require('./checagens/usuario')
const menuPrincipal = require('./telas/menuPrincipal')
const elementosGraficos = require('./elementosGraficos/elementosGraficos')
const emprestimo = require('./telas/emprestimo')
const devolucaoRenovacao = require('./telas/devolucaoRenovacao')
const informacoes = require('./telas/informacoes')
const quitacaoDebitos = require('./telas/quitacaoDebitos')
const despedidaSistema = require('./telas/despedidaSistema')

boasVindas.mostrarTela()
login.mostrarTela()
usuario.checar(login.contaLogada)

if(!usuario.regularizado) {
    usuario.avisoRegularizacao()
}

while (!menuPrincipal.sairSistema) {
    
    menuPrincipal.mostrarTela();

    switch (menuPrincipal.opcaoEscolhida) {
        case 1:
            emprestimo.mostrarTela();
        break;
        
        case 2:
            devolucaoRenovacao.mostrarTela()
        break;
        
        case 3:
            quitacaoDebitos.mostrarTela();
        break;

        case 4:
            informacoes.mostrarTela();
        break;

        case 5:
            despedidaSistema.mostrarTela()
        break;
    
        default:
            console.log('Opção inválida. Tente novamente.');
        break;
    }
}