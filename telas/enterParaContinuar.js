const prompt = require('prompt-sync')();
const elementosGraficos = require("../elementosGraficos/elementosGraficos")

const enterParaContinuar = {

    mostrarTela: function() {
        prompt('Tecle ENTER para continuar... ')
        elementosGraficos.espaçamento();
    }
}

module.exports = enterParaContinuar;