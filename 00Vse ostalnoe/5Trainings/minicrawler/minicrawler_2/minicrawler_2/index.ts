import * as dotenv from 'dotenv';
import server from './src/server';
import detail from './src/getir-app-us/actions/detail'
dotenv.config();

if (!process.env.PORT) {
    throw new Error("Port is missing");
}

async function x(){
const res = await detail("61a5cf6ddb915f511dde60fb")
console.log(res);
}

x();
server(parseInt(process.env.PORT));
