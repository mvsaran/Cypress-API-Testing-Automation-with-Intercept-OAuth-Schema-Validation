describe('Parsing JSON Response in Cypress Tests', () => {
    // Test to parse JSON response and validate properties
    it('should parse JSON response and validate properties', () => {
        cy.log('Starting test for parsing JSON response');
        cy.request('https://fakestoreapi.com/products')
            .then((response) => {
                // Check if the response status is 200
                expect(response.status).to.eq(200);
                
                // Parse the JSON response
                const products = response.body;
                
                // Validate that the response is an array
                expect(products).to.be.an('array');
                
                // Validate properties of the first product
                const firstProduct = products[0];
                expect(firstProduct).to.have.property('id');
                expect(firstProduct).to.have.property('title');
                expect(firstProduct).to.have.property('price');
                
                // Log the first product details
                cy.log(`First Product ID: ${firstProduct.id}`);
                cy.log(`First Product Title: ${firstProduct.title}`);
            });
    });
    // Test to validate the product count in the JSON response
    it('should validate product count in JSON response', () => {
        cy.request('https://fakestoreapi.com/products')
            .then((response) => {
                // Check if the response status is 200
                expect(response.status).to.eq(200);
                
                // Parse the JSON response
                const products = response.body;
                
                // Validate that the response contains 20 products
                expect(products).to.have.length(20);
                
                // Log the total number of products
                cy.log(`Total Products: ${products.length}`);
            });
    });
    
});