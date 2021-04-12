const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles {

    acessarFormularioDeNovaPublicacao(){
        cy.get(el.linkNovaPublicacao).click()
    }

    preencherFormulario(){

    // Ação
        // preencher o form
        cy.get(el.inputTitle).type('Agilizei Title')
        cy.get(el.inputDescription).type('Cypress');
        cy.get(el.textAreaBody).type(faker.lorem.paragraph())
        cy.get(el.inputTag).type('cypress');
    }

    submeterPublicacao(){
        //submeter artigo

        //POST 200 /api/articles
        //  GET 200 /api/articles/agilizei-title-o8s4dz
         //   (xhr)
         //   GET 200 /api/articles/agilizei-title-o8s4dz/comments

        cy.server()
        cy.route('POST','**/api/articles').as('POSTArticles');
        cy.route('GET','**/api/articles/agilizei-title-**').as('GETArticlesTitle');
        cy.route('GET','**/api/articles/agilizei-title-**/comments').as('getArticlesTitleComments');

        cy.get(el.buttonSubmit).click()

    }

    verificarSeAPublicacaoFoiCriadaComSucesso(){
        
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitle) => {
            expect(getArticlesTitle.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleComments) => {
            expect(getArticlesTitleComments.status).to.eq(200)
        })
        cy.url().should('contain','article');
        

    }

}

export default new Articles();