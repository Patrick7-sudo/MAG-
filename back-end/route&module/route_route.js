import express from 'express';

import query from '../sql/index.js'

const routeRouters = express.Router()

routeRouters.get('/',async (req,res)=>{

    const getAllRoutes = await getALL();
    async function getALL(){
        const data = await query(`SELECT routes.Id,CONCAT(airlines.iata_code, ' ',flight_num) AS "Flight Number",
        departport.name AS "Departure",departport.location_code_iata AS "IATA Departure Port",
        depart_time AS "Departure Time",
        arrivalport.name AS "Arrival",
        arrivalport.location_code_iata AS "IATA Arrival Port",
        arrive_time AS "Arrival Time",
        departDate AS "Departure Date"
        FROM routes 
        JOIN airlines ON airline_id = airlines.id
        JOIN airport AS departport ON departure = departport.id
        JOIN airport AS arrivalport ON arrival = arrivalport.id ORDER BY id ASC`)
        return data.rows;
    }

    res.status(200).json({status:true,payload:{getAllRoutes}})  
})

routeRouters.get('/:id', async(req,res)=>{
    const {id} = req.params;
    const numID = Number(id)
    
    const getRoute = await getIndividualRoute(numID)
    
    async function getIndividualRoute(input){
        const data =
          await query(`SELECT CONCAT(airlines.iata_code, ' ',flight_num) AS "Flight Number",
        departport.name AS "Departure",departport.location_code_iata AS "IATA Departure Port",
        depart_time AS "Departure Time",
        arrivalport.name AS "Arrival",
        arrivalport.location_code_iata AS "IATA Arrival Port",
        arrive_time AS "Arrival Time",
        departDate AS "Departure Date"
        FROM routes 
        JOIN airlines ON airline_id = airlines.id
        JOIN airport AS departport ON departure = departport.id
        JOIN airport AS arrivalport ON arrival = arrivalport.id WHERE routes.id=$1`,[input]);

        return data.rows;
    }

    res.status(200).json({status:true,payload:{getRoute}})
})

routeRouters.post('/', async(req,res)=>{
    const rawData =req.body;
    // console.log(rawData)
    const cleanData = await doing(rawData)
    async function doing(input){

        const locationDeparture =input.departure;
        const locationArrival = input.arrival;
        const individualAirline = input.airline_id;

console.log(individualAirline)
        const dataDeparture = await query(`SELECT id FROM airport WHERE name = $1 OR location_code_iata = $1`,[locationDeparture])
        // console.log(data.rows[0].id)
        const departureIDNum= Number(dataDeparture.rows[0].id)
        // console.log(dataDeparture.rows);
        const dataArrival= await query(`SELECT id FROM airport WHERE name = $1 OR location_code_iata = $1`,[locationArrival])
        // console.log(dataArrival.rows[0].id);
         const arrivalIDNum = Number(dataArrival.rows[0].id);

        const airlineID = await query(`SELECT id FROM airlines WHERE name = $1 OR iata_code = $1 `,[individualAirline])
        console.log(airlineID.rows)
         const airlineIDNum = Number(airlineID.rows[0].id);

        const flightNum = input.flight_num;
        const departTime =input.depart_time;
        const arrivalTime = input.arrival_time;
        const departDate = input.departDate;

        console.log(flightNum,departTime,arrivalTime,departDate);
        const dataToPush = await query('INSERT INTO routes (flight_num,departure,depart_time,arrival,arrive_time,departDate,airline_id) VALUES ($1,$2,$3,$4,$5,$6,$7)',[Number(flightNum),departureIDNum,departTime,arrivalIDNum,arrivalTime,departDate,airlineIDNum])

        console.log(dataToPush)
        return dataToPush.rows
    }



    res.status(200).json({status:true, payload:{cleanData}})
})

routeRouters.delete('/:id',async (req,res)=>{
    const {id} = req.params;
    const numID = Number(id);

    const deleteRouteID = await deleteByIDRoute(numID)

    async function deleteByIDRoute(input){
        const data = await query('DELETE FROM routes WHERE id=$1',[input])

        const allData = await query('SELECT * FROM routes')

        return allData.rows
    }

    res.status(200).json({success:true,payload:{deleteRouteID}})
})

routeRouters.put('/:id', async(req,res)=>{
    const {id} =req.params;
    const numID = Number(id);

    const dataToUpdateRaw = req.body;

    const updateRouteById = await updateRoute(dataToUpdateRaw,numID)

    async function updateRoute(input, index) {
      const flightNum = input.flight_num;
      const departure = input.departure;
      const departTime = input.depart_time;
      const arrival = input.arrival;
      const arrivalTime = input.arrival_time;
      const departDate = input.departDate;
      const airlineID = input.airline_id;

      const dataDeparture = await query(
        `SELECT id FROM airport WHERE name = $1 OR location_code_iata = $1`,
        [departure]
      );
     
      const departureIDNum = Number(dataDeparture.rows[0].id);

       const dataArrival = await query(
         `SELECT id FROM airport WHERE name = $1 OR location_code_iata = $1`,
         [arrival]
       );
       // console.log(dataArrival.rows[0].id);
       const arrivalIDNum = Number(dataArrival.rows[0].id);

       const airline = await query(`SELECT id FROM airlines WHERE name = $1 OR Iata_code = $1`,[airlineID])

       const airlineIDNum = Number(airline.rows[0].id);

      const dataUpdate = await query(
        `UPDATE routes SET 
          flight_num = $1,
          departure = $2,
          depart_time = $3,
          arrival = $4,
          arrive_time = $5,
          departDate = $6,
          airline_id =$7 
          WHERE id= $8`,
        [
          flightNum,
          departureIDNum,
          departTime,
          arrivalIDNum,
          arrivalTime,
          departDate,
          airlineIDNum,
          index,
        ]
      );

      return dataUpdate.rows;
    }
    
    res.status(200).json({success:true, payload:{updateRouteById}})
})

export default routeRouters;