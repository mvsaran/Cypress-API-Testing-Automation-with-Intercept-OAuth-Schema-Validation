describe("Different POST Requests", () => {
    // POST Request with JSON body
    it("should make a POST request with JSON body", () => {
        cy.request({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        body: {
            title: "foo",
            body: "bar",
            userId: 1,
        },
        headers: {
            "Content-Type": "application/json",
        },
        }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("title", "foo");
        });
    });
    
    // POST Request with form data
    it("Dynamically genarating JSON Object", () => {
        const randomTitle = `Title ${Math.floor(Math.random() * 1000)}`;
        const randomBody = `Body ${Math.floor(Math.random() * 1000)}`;

        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            body: {
                title: randomTitle,
                body: randomBody,
                userId: 1,
            },
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property("title", randomTitle);
        });
       
    });
    // POST Request with query parameters
    it("should make a POST request with query parameters", () => {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts?userId=1",
            body: {
                title: "foo",
                body: "bar",
            },
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property("title", "foo");
        }); 
    })

    //Post request with Fixture data
    it("should make a POST request with fixture data", () => {
        cy.fixture("postData").then((postData) => {
            cy.request({
                method: "POST",
                url: "https://jsonplaceholder.typicode.com/posts",
                body: postData,
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property("title", postData.title);
            });
        });
    }); 
});
