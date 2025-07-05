/// <reference types="cypress" />

///reference types="cypress" />
describe('API Intercept Tests', () => {
    // Test to intercept API request and validate response
    it('Test API Intercept', () => {
        cy.log('Starting test for API intercept');

        // Intercept the API request
        cy.visit('https://jsonplaceholder.typicode.com/');
        cy.intercept({
                path: '/posts',
         
        }).as('posts');

        cy.get('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)').click();
        cy.wait('@posts').then((interception) => {
            cy.log(JSON.stringify(interception))
            console.log(interception);
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.response.body).to.have.length(100);

        })
    });

    // Test with Mocked API response
    it('Test with Mocked API Response', () => {
        cy.visit('https://jsonplaceholder.typicode.com/');
        cy.intercept('GET', '/posts', {totalpost:5,name:'Saran'}).as('mockedPosts');
        cy.get('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)').click();
        cy.wait('@mockedPosts').then((interception) => {
            cy.log(JSON.stringify(interception));
            console.log(interception);
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.response.body.totalpost).to.eq(5);
        } );
    }); 

    // Test with fixture data
    it('Test with Fixture Data', () => {
        cy.visit('https://jsonplaceholder.typicode.com/');
        cy.intercept('GET', '/posts', { fixture: 'interceptbody.json' }).as('fixturePosts');
        cy.get('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)').click();
        cy.wait('@fixturePosts').then((interception) => {
            cy.log(JSON.stringify(interception));
            console.log(interception);
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.response.body.name).to.eq('Saran Kumar');
        });
    });
});