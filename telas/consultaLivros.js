const prompt = require('prompt-sync')();
const elementosGraficos = require('../elementosGraficos/elementosGraficos');
const continuacao = require('./continuacao');
const menuPrincipal = require('./menuPrincipal')

const consultaLivros = {

    opcaoValida: false,

    mostrarTela: function() {

        while (!this.opcaoValida) {

            elementosGraficos.cabecalho();
            console.log('Consulta de livros');
            console.log('');
            console.log('Selecione uma das opções de busca: ');
            console.log('');
            console.log('1 -> Listar todos os livros');
            console.log('2 -> Buscar por Categoria');
            console.log('3 -> Buscar por Autor');
            console.log('4 -> Buscar por Título');
            console.log('5 -> Pedir uma sugestão');
            elementosGraficos.rodape();

            menuPrincipal.opcaoEscolhida = Number(prompt('Digite a opção desejada: '))
            elementosGraficos.rodape();
         
            switch (menuPrincipal.opcaoEscolhida) {
                case 1:
                    this.opcaoValida = true;
                    console.log(menuPrincipal.opcaoEscolhida);
                break;
    
                case 2:
                    this.opcaoValida = true;
                    console.log(menuPrincipal.opcaoEscolhida);
                break;
    
                case 3:
                    this.opcaoValida = true;
                    console.log(menuPrincipal.opcaoEscolhida);
                break;
    
                case 4:
                    this.opcaoValida = true;
                    console.log(menuPrincipal.opcaoEscolhida);
                break;
    
                case 5:
                    this.opcaoValida = true;
                    console.log(menuPrincipal.opcaoEscolhida);
                break;
            
                default:
                    console.log('Opção invalida. Tente novamente.');
                    elementosGraficos.rodape();
                    continuacao.mostrarTela();
                break;
            }
        }
    }
}

module.exports = consultaLivros;