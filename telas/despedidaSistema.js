const elementosGraficos = require("../elementosGraficos/elementosGraficos");
const menuPrincipal = require("./menuPrincipal");

const despedidaSistema = {
   
    mostrarTela: function() {

        elementosGraficos.cabecalho();
        console.log('Até a próxima! Encerrando seu atendimento...');
        elementosGraficos.rodape();
        
        menuPrincipal.sairSistema = true;
    }
}

module.exports = despedidaSistema;