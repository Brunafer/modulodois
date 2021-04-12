/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'

const faker = require ('faker');
import Routes from '../support/routes'


context('Cadastro', () => {  
    beforeEach(() => {
        Routes.init()
        // Preparação
        cadastro.acessarRegistro()     
        
    });
    it('Cadastrar um novo usuário', () => {  
        
        //Ação
       cadastro.preencherDadosDeCadastro()
        
        //Verificação
        cadastro.verificarCadastroComSucesso()

               
    });
});
