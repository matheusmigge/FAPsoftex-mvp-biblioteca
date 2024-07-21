const elementosGraficos = require("../elementosGraficos/elementosGraficos");

const boasVindas = { 

    mostrarTela: function() {
        elementosGraficos.espaçamento();
        console.log(`Bem vindo a Aquela Biblioteca!`)
        console.log(`Faça seu login para continuar.`);
        elementosGraficos.espaçamento();
    }
}

module.exports = boasVindas;