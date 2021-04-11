
const el = require('./elements').ELEMENTS

class Login{

    acessarLogin(){
    cy.visit('login');
    }

    preencherFormulario(){
        //preencher o formulario
        cy.get(el.inputEmail).type(Cypress.config().user.email)
        cy.get(el.inputPassword).type('12345678');
    }

    submeterFormulario(){
        //submeter o formulario
        cy.get(el.buttonSubmit).click();
    }

}

export default new Login();