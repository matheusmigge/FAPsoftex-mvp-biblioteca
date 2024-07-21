const prompt = require('prompt-sync')();
const bancoUsuarios = require('../bancoDados/bancoUsuarios');
const elementosGraficos = require('../elementosGraficos/elementosGraficos');
const enterParaContinuar = require('./enterParaContinuar');

const login = {

    loginBemSucedido: false,
    contaLogada: null,

    mostrarTela: function() {
        while (this.loginBemSucedido == false) {
            
            elementosGraficos.cabecalhoTitulo(`Entrar no sistema`);
            var login = prompt(`Login: `);
            var senha = prompt(`Senha: `);
            elementosGraficos.espaçamento();

            for (let usuario of bancoUsuarios) {
                if (usuario.login == login && usuario.senha == senha) {

                    this.contaLogada = usuario;
                    this.loginBemSucedido = true;

                    elementosGraficos.cabecalhoTitulo(`Bem vindo, ${this.contaLogada.login}!`);

                    break;
                }
            }

            if (this.loginBemSucedido == false) {
                elementosGraficos.espaçamento();
                console.log(`Login ou senha incorretos. Tente novamente.`);
                elementosGraficos.espaçamento();
                enterParaContinuar.mostrarTela();
            }
        }
    }
}

module.exports = login;