const prompt = require('prompt-sync')();
const elementosGraficos = require("../elementosGraficos/elementosGraficos")

const continuacao = {

    mostrarTela: function() {

        prompt('Tecle enter para continuar...')
        elementosGraficos.rodape()
    }
}

module.exports = continuacao;