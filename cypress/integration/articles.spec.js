/// <reference types="cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Artigo', () => {
    //hooks -> momentos antes /depois do teste
    //before/ beforeEach
    //after / afterEach
   beforeEach(() => {
       Routes.init()
       //Preparação
            cy.backgroundLogin()
            articles.acessarFormularioDeNovaPublicacao()
        
        
    });

    it('Criar um novo artigo',() => {
        //Ação    
        articles.preencherFormulario()
        articles.submeterPublicacao()
    //Verificação   

        articles.verificarSeAPublicacaoFoiCriadaComSucesso()
         // Separar testes por etapas: AAA - Arrange Act Assert (preparação, execução, verificação)
});

});