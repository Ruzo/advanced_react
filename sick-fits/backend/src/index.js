require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createserver');
const db = require('./db');

const server = createServer();

// TODO: Express middleware to handle JWT cookies
// TODO: Express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets =>
    console.log(`Server is running on port http://localhost:${deets.port}`)
);
