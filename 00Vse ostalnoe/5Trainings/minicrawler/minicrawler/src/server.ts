/*

Create HTTP server with 1 endpoint:

POST /task 
{
  "operation": "search" | "detail",
  "payload":   "coca cola" | "1241231231"
}

*/

import * as Getir from './getir-app-us';

interface Task {
  operation: "search" | "detail";
  payload: string
}


const server = {}; // Create server here

export default server;