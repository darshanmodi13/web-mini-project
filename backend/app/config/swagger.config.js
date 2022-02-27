const schemas = require("../../docs/schema/index");
const paths = require("../../docs/path/index");

module.exports = {
  openapi: "3.0.0",
  info: {
    title: "Backend",
    description: "All Apis for integration",
    version: "0.0.1",
  },
  servers: [
    {
      url: "http://localhost:8080",
      description: "Development server",
    },
    // {
    //   url: "https://woc4-darshan-modi.herokuapp.com",
    //   description: "Testing Server",
    // },
  ],
  tags: [
    {
      name: "Auth", // name of a tag
      description: "API to manage Authentication",
    },
    {
      name: "User", // name of a tag
      description: "API to manage User",
    },
  ],
  components: {
    securitySchemes: {
      cookieAuth: {
        type: "apiKey",
        in: "cookie",
        name: "jwt",
      },
      // JWT: {
      //   type: "http",
      //   scheme: "bearer",
      //   bearerFormat: "JWT",
      //   name: "Authentication",
      //   in: "header",
      // },
    },
    schemas: {
      ...schemas,
    },
  },
  paths: {
    ...paths,
  },
  apis: ["./app/routes/*.js"],
  //  if security required globally
  // security: [
  //   {
  //     bearerAuth: [],
  //   },
  // ],
};

