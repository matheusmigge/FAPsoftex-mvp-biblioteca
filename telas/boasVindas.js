const elementosGraficos = require("../elementosGraficos/elementosGraficos");
const enterParaContinuar = require("./enterParaContinuar");

const boasVindas = { 

    mostrarTela: function() {
        elementosGraficos.espaçamento();
        console.log(`Bem vindo a Aquela Biblioteca!`)
        console.log(`Faça seu login para acessar nossos serviços.`);
        elementosGraficos.espaçamento();

        enterParaContinuar.mostrarTela();
    }
}

module.exports = boasVindas;