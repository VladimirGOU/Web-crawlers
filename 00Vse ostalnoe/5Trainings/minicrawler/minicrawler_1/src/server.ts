/*

Create HTTP server with 1 endpoint:

POST /task 
{
  "operation": "search" | "detail",
  "payload":   "coca cola" | "1241231231"
}

GET /search?query=coca+cola 
GET /product/:id

*/
import * as Getir from './getir-app-us';
//import Product from "./interfaces/product";
import detail from "../src/getir-app-us/actions/detail"
import Express from 'express';
import BodyParser from 'body-parser';
import search from './getir-app-us/actions/search';

interface Task {
  operation: "search" | "detail";
  payload: string; //should be id
}

const express = require("express");
//const request = require("request");
const bodyParser = require("body-parser");

interface typedExpressRequest<T> extends Express.Request {
  body: T;
}

export default function(port: number) {
const app = express();
app.use(bodyParser.json());
app.get("/", (req: any, res: any) => {
  res.status(200).send("Shnyaga is running");
});
app.post(
  "/task",
  async(req: typedExpressRequest<Task>, res: Express.Response) => {
    try {
      console.log(req.body);
      if (req.body.operation == "search") {
        const s = await search(req.body.payload);
        res.json({ result: s})
      }

      if (req.body.operation == "detail") {
        const d = await detail(req.body.payload);
        res.json({ result: d})
      }

      else {
        res.json({error:"error"})
      }
    }
    catch(error) {
      res.json({error:error})
    }
  }
);

app.listen(port, () => {
  console.log(`Listen on port ${port}`)
});

return app
}














// const app = express();
// app.use(express.json());
// app.post('/task', (req, res) => {
//   if (req.body.operation === 'search'){
//     console.log('search')
//   }   
//   if (req.body.operation === 'detail'){
//     console.log('detail')
//   }

//  console.log(req.body);
//  res.send('ok');
// })

// export default app;