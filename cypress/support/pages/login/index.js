
const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Login{

    acessarLogin(){
        //PREPARAÇAO
    cy.visit('login');
    }

    //Ação
    preencherFormulario(){
        //preencher o formulario
        cy.get(el.inputEmail).type(Cypress.config().user.email)
        cy.get(el.inputPassword).type('12345678');
    }
    submeterFormulario(){
        //submeter o formulario

        // api/users/login
       // GET 200 /api/tags
       // GET 200 /api/articles/

       cy.server
       cy.route('POST','**api/users/login').as('postLogin');
       cy.route('GET','**/api/tags').as('GETTags');
      
        cy.get(el.buttonSubmit).click();
   
    }
     //Verificação
    verificarLoginRealizadoComSucesso(){
        cy.wait(`@${Routes.as.postLogin}`).then((postLogin) => {
            expect(postLogin.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getTags}`).then((getTags) => {
            expect(getTags.status).to.eq(200)
        })
        
        cy.url().should('contain','realworld');

    }

}

export default new Login();