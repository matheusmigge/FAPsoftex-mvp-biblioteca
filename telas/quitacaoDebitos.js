const prompt = require('prompt-sync')();
const usuario = require("../checagens/usuario");
const elementosGraficos = require("../elementosGraficos/elementosGraficos");
const login = require("./login");
const menuPrincipal = require("./menuPrincipal");

const quitacaoDebitos = {

    mostrarTela: function() {

        if(usuario.regularizado){
            console.log('Você não possui nenhum débito em aberto em nosso sistema.');
            console.log('Retornando ao menu principal...');
            elementosGraficos.rodape();
        } else {
            elementosGraficos.cabecalho();
            console.log('Regularização de débitos');
            console.log('');
            console.log(`Você tem débitos em aberto no valor de R$ ${login.contaLogada.debito.toFixed(2)}.`);
            console.log('Deseja pagar agora?');
            console.log('');
            console.log('1 -> Sim');
            console.log('2 -> Não');
            elementosGraficos.rodape();

            menuPrincipal.opcaoEscolhida = Number(prompt('Digite a opção desejada: '))

            switch (menuPrincipal.opcaoEscolhida) {
                case 1:
                    console.log('');
                    console.log('Para efetuar sua quitação de débitos, por favor, dirija-se ao bacão.');
                    console.log('Retornando ao menu principal...');
                    console.log('');

                    prompt('Tecle enter para continuar.')
                    elementosGraficos.rodape();
                break;

                case 2:
                    console.log('');
                    console.log('Você deve regularizar sua situação para poder ter acesso novamente ao serviço de empréstimo de livros.');
                    console.log('Seu atendimento está sendo encerrado...');
                    elementosGraficos.rodape();

                    menuPrincipal.sairSistema = true;
                break;
            
                default:
                    console.log('Opção inválida! Tente novamente.');
                    elementosGraficos.rodape();
                break;
            }

        }
    }
}

module.exports = quitacaoDebitos;