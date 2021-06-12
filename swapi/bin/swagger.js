const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/filmsRoute.js'];

const doc  = {
    info: {
        version: "1.0.0",
        title: "SWAPI  - POC",
        description: "API Conceito em Node.js."
    },
    host: "localhost:8080",
    basePath: "/api",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        ReturnService : {
            count: "integer",
            next: "integer",
            previous : "integer",
            results : "arraylist"            
        },
        Film : {

            title : "string",
            episode_id : "integer",
            opening_crawl : "string",
            director : "string",
            producer : "string",
            release_date : "string",
            characters : "string",
            planets : "string",
            starships : "string",
            vehicles : "string",
            species : "string",
            url : "string",
            created : "string",
            edited : "",
            version : "integer"
        },
        InputParameter : {
            description : "string"
        }
        
    } 
};

swaggerAutogen(outputFile, endpointsFiles,doc).then(() => {
    require('./server.js');
})