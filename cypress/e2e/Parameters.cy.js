describe('Parameters in Cypress Tests', () => {
  // Test with a parameter
  it('should use a parameter in the test', () => {
    const param = 'testParam';
    cy.log(`The parameter is: ${param}`);
    expect(param).to.equal('testParam');
  });

  // Test with multiple parameters
  it('should use multiple parameters in the test', () => {
    const param1 = 'firstParam';
    const param2 = 'secondParam';
    cy.log(`The parameters are: ${param1} and ${param2}`);
    expect(param1).to.equal('firstParam');
    expect(param2).to.equal('secondParam');
  });

  // Test with a dynamic parameter
  it('should use a dynamic parameter in the test', () => {
    const dynamicParam = `dynamicParam-${Math.random()}`;
    cy.log(`The dynamic parameter is: ${dynamicParam}`);
    expect(dynamicParam).to.include('dynamicParam-');
  });
    // Test with a parameterized URL
    it('should use a parameterized URL', () => {
        const userId = 1;
        cy.request(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body[0]).to.have.property('userId', userId);
            });
    });    
    //Test with Query Parameters
    it('should use query parameters in the request', () => {    
        const userId = 1;
        cy.request({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
            qs: {
                userId: userId
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0]).to.have.property('userId', userId);
        });
    })  
         
});
