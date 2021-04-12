const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../../routes'


class Cadastro {
    acessarRegistro(){
        //PREPARAÇAO
    cy.visit('register');
    }
    //Ação
    preencherDadosDeCadastro(){
        cy.get(el.userName).type(faker.name.firstName() + faker.name.lastName())
        cy.get(el.inputEmail).type(faker.internet.email())
        cy.get(el.inputPassword).type('12345678');

        cy.server
        cy.route('POST','**api/users').as('postUsers');
        cy.route('GET','**/api/tags').as('GETTags');
        cy.route('GET','**/api/articles/feed**').as('getFeed');

        cy.get(el.buttonSubmit).click();

    }

    //Verificação
    verificarCadastroComSucesso(){
        cy.wait(`@${Routes.as.postUsers}`).then((postUsers) => {
            expect(postUsers.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getTags}`).then((getTags) => {
            expect(getTags.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getFeed}`).then((getFeed) => {
            expect(getFeed.status).to.eq(200)
        })
        
        cy.url().should('contain','realworld');
    }

}
export default new Cadastro();