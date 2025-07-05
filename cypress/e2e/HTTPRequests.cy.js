describe('HTTP Requests', () => {
  // GET Request
  it('should make a GET request to the API', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
      });
  });

  //POST Request
  it('should make a POST request to the API', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('title', 'foo');
    });
  });

  // PUT Request
  it('should make a PUT request to the API', () => {
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        id: 1,
        title: 'updated title',
        body: 'updated body',
        userId: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'updated title');
    });
  });

  //DELETE Request
  it('should make a DELETE request to the API', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/1'
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});