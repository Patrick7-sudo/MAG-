import express from 'express';
import logger from 'morgan';
import createError from 'http-errors';

import cors from 'cors';
import Routers from './route&module/airport_route.js'
import airlineRouters from './route&module/airline_route.js'
import routeRouters from './route&module/route_route.js';
import airportIndividual from './route&module/airportIndividual.js';
import airlineIndividual from "./route&module/airlineSearch.js";
import airlineNairport from './route&module/airportNairline.js';

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
app.use('/airportadmin',Routers)
app.use('/airlineadmin',airlineRouters);
app.use('/routesadmmin',routeRouters);
app.use('/airportSearch',airportIndividual);
app.use('/airlineSearch',airlineIndividual);
app.use('/airlineairport',airlineNairport);
 

const start = async () =>{
    try{app.listen(PORT,()=>{
        console.log(`API connected at ${PORT}`)
    })}
    catch(error){console.log(error)}
}

start()
