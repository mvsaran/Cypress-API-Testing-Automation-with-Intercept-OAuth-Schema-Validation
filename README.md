# 🚀 Cypress API Testing Automation Framework

This project demonstrates API testing using **Cypress**, focusing on the following advanced scenarios:
- API Interception and Mocking
- OAuth2 Authentication
- JSON Schema Validation
- Parameterized and Chained Requests
- JSON Response Parsing
- HTTP Request Methods (GET/POST)

---

## 📂 Project Structure
CYPRESSAPITESTING/
│
├── cypress/
│ ├── e2e/
│ │ ├── APIIntercept.cy.js # Intercept & mock API requests
│ │ ├── Authorization.cy.js # OAuth2 Authentication
│ │ ├── HTTPRequests.cy.js # GET and POST request tests
│ │ ├── JSONSchemaValidation.cy.js # Validate JSON against schema
│ │ ├── OAuth2Authentication.cy.js # OAuth2 Token workflow
│ │ ├── Parameters.cy.js # Param-based API calls
│ │ ├── ParsingJSONResponse.cy.js # Extract data from API response
│ │ ├── POSTRequests.cy.js # Send JSON payloads
│ │ └── RequestChaining.cy.js # Chaining requests
│ │
│ ├── fixtures/
│ │ ├── example.json
│ │ ├── interceptbody.json
│ │ └── postData.json # Payloads used in POST requests
│ │
│ └── support/
│
├── cypress.env.json # Store sensitive or env-specific data
├── cypress.config.js # Cypress test configuration
├── package.json # NPM dependencies
├── .gitignore # Files to ignore in version control
└── README.md # Project documentation
🎯 Features Covered
cy.intercept() for API observation and mocking

API request chaining

Environment configuration using cypress.env.json

Cypress fixtures for reusable payloads

JSON schema validation using Ajv

📚 References
Cypress Official Docs
