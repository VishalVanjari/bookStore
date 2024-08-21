// src/doc/swagger.js
// import swaggerAutogen from 'swagger-autogen';
const swaggerAutogen = require('swagger-autogen');

const doc = {
  openapi: '3.1.0',
  info: {
    title: 'My API',
    description: 'Description',
    version: '1.0.0'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local server'
    }]
  // ],
  // tags: [
  //   {
  //     name: 'User',
  //     description: 'Operations about user'
  //   },
  //   {
  //     name: 'Notes',
  //     description: 'Operations about notes'
  //   },
  //   {
  //     name: 'Default',
  //     description: 'Welcome to the application'
  //   }
  // ],
  // paths: {}
};

const outputFile = './swagger.json';
const endpointsFiles = [
  '../index.ts',
  '../routes/*.ts'
];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
  console.log('Swagger documentation generated successfully');
});