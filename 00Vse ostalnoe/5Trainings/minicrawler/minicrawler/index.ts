import * as dotenv from 'dotenv';
dotenv.config();

// TODO: Check if process.env.PORT is set

import server from './src/server';


console.log("Hello world"); // Remove this
//server.start(process.env.PORT);