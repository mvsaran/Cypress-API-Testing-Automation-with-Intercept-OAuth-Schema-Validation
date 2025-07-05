/// <reference types="cypress" />
const Ajv = require('ajv');
const addFormats = require('ajv-formats'); // ✅ Import the formats plugin

const ajv = new Ajv();
addFormats(ajv); // ✅ Enable formats like 'uri'

// Define the JSON schema for product validation
describe('JSON Schema Validation in Cypress Tests', () => {

    it('should validate JSON response against schema', () => {
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        })
        .then((response) => {
            // Check if the response status is 200
            expect(response.status).to.eq(200);

            // Define the JSON schema
            const productSchema = {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        title: { type: 'string' },
                        price: { type: 'number' },
                        description: { type: 'string' },
                        category: { type: 'string' },
                        image: { type: 'string', format: 'uri' } // format now supported
                    },
                    required: ['id', 'title', 'price', 'description', 'category', 'image']
                }
            };

            // Validate the response body against the schema
            const validate = ajv.compile(productSchema);
            const valid = validate(response.body);

            // Assert that the response is valid
            expect(valid, ajv.errorsText(validate.errors)).to.be.true;
        });
    });
});
