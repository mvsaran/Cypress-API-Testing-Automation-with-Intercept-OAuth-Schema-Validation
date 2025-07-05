describe('OAuth2 Authentication in Cypress Tests', () => {
    let accessToken;

    before(() => {
        cy.request({
            method: 'POST',
            url: 'https://github.com/login/oauth/access_token',
            qs: {
                client_id: Cypress.env('client_id'),
                client_secret: Cypress.env('client_secret'),
                code: Cypress.env('auth_code')
            },
            headers: {
                accept: 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            accessToken = response.body.access_token;
            cy.log(`Access Token: ${accessToken}`);
        });
    });

    it('OAuth2 Request', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('login');
            expect(response.body).to.have.property('id');
        });
    });
});
