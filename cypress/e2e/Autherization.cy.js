describe('Authorization Tests', () => {
    // Test with Basic Authentication
    it('should make a request with Basic Authentication', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
            auth: {
                username: 'user',
                password: 'password'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        });
    });

    // Test with Bearer Token Authentication
    it('should make a request with Bearer Token Authentication', () => {
         it('should make a request with the API key', () => {
    cy.request({
      method: 'GET', // You can change this to POST, PUT, etc. depending on the API
      url: 'https://your-api-endpoint.com', // Replace with your actual API endpoint
      headers: {
        'x-api-key': 'reqres-free-v1' // Your API key here
      }
    }).then((response) => {
      // Assert the response status
      expect(response.status).to.eq(200);
    });
});
    });
});