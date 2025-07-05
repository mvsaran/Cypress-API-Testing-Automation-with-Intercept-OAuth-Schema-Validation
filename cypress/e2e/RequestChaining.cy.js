describe()('Chain Request in Cypress Tests', () => {
    // Test to chain requests and validate the response
    it('should chain requests and validate the response', () => {
        cy.log('Starting test for chaining requests');
        
        // First request to get products
        cy.request('https://fakestoreapi.com/products')
            .then((response) => {
                // Check if the response status is 200
                expect(response.status).to.eq(200);
                
                // Parse the JSON response
                const products = response.body;
                
                // Validate that the response is an array
                expect(products).to.be.an('array');
                
                // Log the total number of products
                cy.log(`Total Products: ${products.length}`);
                
                // Get the first product ID
                const firstProductId = products[0].id;
                cy.log(`First Product ID: ${firstProductId}`);
                
                // Chain request to get details of the first product
                return cy.request(`https://fakestoreapi.com/products/${firstProductId}`);
            })
            .then((productResponse) => {
                // Check if the product response status is 200
                expect(productResponse.status).to.eq(200);
                
                // Validate properties of the first product
                const product = productResponse.body;
                expect(product).to.have.property('id');
                expect(product).to.have.property('title');
                expect(product).to.have.property('price');
                
                // Log the first product details
                cy.log(`First Product Title: ${product.title}`);
            });
    });

    //POST,GET,PUT,DELETE -Chain Request
    it('should perform POST, GET, PUT, DELETE requests in a chain', () => {
        cy.log('Starting test for POST, GET, PUT, DELETE requests in a chain');

        // POST request to create a new product
        cy.request({
            method: 'POST',
            url: 'https://fakestoreapi.com/products',
            body: {
                title: 'New Product',
                price: 29.99,
                description: 'This is a new product',
                category: 'electronics',
                image: 'https://example.com/image.jpg'
            }
        }).then((postResponse) => {
            // Check if the POST response status is 200
            expect(postResponse.status).to.eq(200);
            const newProduct = postResponse.body;
            expect(newProduct).to.have.property('id');
            cy.log(`Created Product ID: ${newProduct.id}`);

            // GET request to retrieve the created product
            return cy.request(`https://fakestoreapi.com/products/${newProduct.id}`);
        }).then((getResponse) => {
            // Check if the GET response status is 200
            expect(getResponse.status).to.eq(200);
            const retrievedProduct = getResponse.body;
            expect(retrievedProduct.title).to.eq('New Product');
            cy.log(`Retrieved Product Title: ${retrievedProduct.title}`);

            // PUT request to update the created product
            return cy.request({
                method: 'PUT',
                url: `https://fakestoreapi.com/products/${retrievedProduct.id}`,
                body: {
                    ...retrievedProduct,
                    price: 39.99
                }
            });
        }).then((putResponse) => {
            // Check if the PUT response status is 200
            expect(putResponse.status).to.eq(200);
            const updatedProduct = putResponse.body;
            expect(updatedProduct.price).to.eq(39.99);
            cy.log(`Updated Product Price: ${updatedProduct.price}`);

            // DELETE request to remove the created product
            return cy.request({
                method: 'DELETE',
                url: `https://fakestoreapi.com/products/${updatedProduct.id}`
            });
        }).then((deleteResponse) => {
            // Check if the DELETE response status is 200
            expect(deleteResponse.status).to.eq(200);
            cy.log('Deleted Product Successfully');
        });
    })
})  
