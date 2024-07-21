const elementosGraficos = require("../elementosGraficos/elementosGraficos");
const menuPrincipal = require("./menuPrincipal");

const despedidaSistema = {
   
    mostrarTela: function() {

        elementosGraficos.cabecalhoTitulo('Até a próxima! Encerrando seu atendimento... ');
        
        menuPrincipal.sairSistema = true;
    }
}

module.exports = despedidaSistema;