import express from 'express';
import logger from 'morgan';
import createError from 'http-errors';

import cors from 'cors';
import Routers from './route&module/airport_route.js'
import airlineRouters from './route&module/airline_route.js'
import routeRouters from './route&module/route_route.js';


const app =express();
const PORT =  3000;

app.use(logger('dev'));
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// console.log({ airline });
app.use('/airport',Routers)
app.use('/airline',airlineRouters);
app.use('/routes',routeRouters)
 

const start = async () =>{
    try{app.listen(PORT,()=>{
        console.log(`API connected at ${PORT}`)
    })}
    catch(error){console.log(error)}
}

start()
