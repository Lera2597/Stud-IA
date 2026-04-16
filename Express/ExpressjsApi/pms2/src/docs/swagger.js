const  swaggwerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "My API",
            version: "1.0.0",
            description: "Documentation for my API"
        },
        servers: [
            {
                url: "http://localhost:3000/api"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        }
    },
    apis: ["./src/routes/*.routes.js", "./src/auth/*.js"]
}

const swaggerSpec = swaggwerJsdoc(options);
module.exports = swaggerSpec