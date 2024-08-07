const boasVindas = require('./telas/boasVindas')
const login = require('./telas/login')
const menuPrincipal = require('./telas/menuPrincipal')
const emprestimo = require('./telas/emprestimo')
const devolucaoRenovacao = require('./telas/devolucaoRenovacao')
const informacoes = require('./telas/informacoes')
const quitacaoDebitos = require('./telas/quitacaoDebitos')
const despedidaSistema = require('./telas/despedidaSistema')
const enterParaContinuar = require('./telas/enterParaContinuar')
const regularizacaoUsuario = require('./checagens/regularizacaoUsuario')
const opcoesVoltar = require('./telas/opcoesVoltar')
const elementosGraficos = require('./elementosGraficos/elementosGraficos')

boasVindas.mostrarTela()
login.mostrarTela()
regularizacaoUsuario.checar(login.contaLogada)

if(!regularizacaoUsuario.regularizado) {
    regularizacaoUsuario.mostrarAviso()
    enterParaContinuar.mostrarTela();
}

while (!menuPrincipal.sairSistema) {
    
    menuPrincipal.mostrarTela();

    switch (menuPrincipal.opcaoEscolhida) {
        case 1:
            emprestimo.mostrarTela();

            if (opcoesVoltar.sairSistema) {
                menuPrincipal.sairSistema = true;
            }
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

        case 0:
            despedidaSistema.mostrarTela()
        break;
    
        default:
            console.log('Opção inválida. Tente novamente.');
            elementosGraficos.espaçamento();
        break;
    }
}