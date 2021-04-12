class Routes{

    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'getArticlesTitleComments',
        postLogin: 'postLogin',
        getTags: 'GETTags',
        postUsers: 'postUsers',
        getFeed: 'getFeed'

        
        

    }
    
    init(){
        cy.server()
        cy.route('POST','**/api/articles').as(this.as.postArticles);
        cy.route('GET','**/api/articles/agilizei-title-**').as(this.as.getArticlesTitle);
        cy.route('GET','**/api/articles/agilizei-title-**/comments').as(this.as.getArticlesTitleComments);
        cy.route('POST','**api/users/login').as(this.as.postLogin);
        cy.route('GET','**/api/tags').as(this.as.getTags);
        cy.route('POST','**api/users').as('postUsers');
        cy.route('GET','**/api/articles/feed**').as('getFeed');
 
             

    }
}

export default new Routes();