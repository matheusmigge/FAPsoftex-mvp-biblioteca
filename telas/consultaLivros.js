const elementosGraficos = require('../elementosGraficos/elementosGraficos')
const menuPrincipal = require('./menuPrincipal')

const consultaLivros = {

    mostrarTela: function() {
        elementosGraficos.cabecalho();
        console.log('Consulta de livros');
        console.log('');
        console.log('Selecione uma das opções de busca: ');
        console.log('');
        console.log();
    }
}