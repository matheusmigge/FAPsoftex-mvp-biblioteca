const prompt = require('prompt-sync')();
const bancoUsuarios = require('../bancoDados/bancoUsuarios')
const elementosGraficos = require('../elementosGraficos/elementosGraficos')

const login = {

    loginBemSucedido: false,
    contaLogada: null,

    mostrarTela: function() {
        while (this.loginBemSucedido == false) {
            
            elementosGraficos.cabecalho();
            var login = prompt(`Login: `);
            var senha = prompt(`Senha: `);
            elementosGraficos.rodape;


            for (let usuario of bancoUsuarios) {
                if (usuario.login == login && usuario.senha == senha) {

                    this.contaLogada = usuario;
                    this.loginBemSucedido = true;

                    elementosGraficos.cabecalho();
                    console.log(`Bem vindo, ${this.contaLogada.login}!`);
                    elementosGraficos.rodape();
                    break;
                }
            }

            if (this.loginBemSucedido == false) {

                console.log(`Login ou senha incorretos. Tente novamente.`);
                elementosGraficos.rodape();
            }
        }
    }
}

module.exports = login;