/// <reference types="cypress" />

import login from '../support/pages/login'

import Routes from '../support/routes'


context('Login', () => {
    beforeEach(() => {
        Routes.init()

        // Preparação
       login.acessarLogin()

    });
    it('Realizar login com sucesso', () => {
       
       //Ação
       login.preencherFormulario()
       login.submeterFormulario()
               
       //verificação
       login.verificarLoginRealizadoComSucesso()

    
    });
});