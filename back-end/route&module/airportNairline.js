import express from "express";
import query from "../sql/index.js"

const airlineNairport = express.Router();

airlineNairport.get("/",async(req,res)=>{
    const hello = req.query;
    const airportUser =hello.airport;
    const airlineUser = hello.airline;
    console.log(airportUser);
     console.log(airlineUser);

    const getRoute = await getIndividualRoute(airportUser,airlineUser);

    async function getIndividualRoute(input1,input2) {
      const data = await query(
        `SELECT CONCAT(airlines.iata_code, ' ',flight_num) AS "Flight Number",
          departport.name AS "Departure",departport.location_code_iata AS "IATA Departure Port",
          depart_time AS "Departure Time",
          arrivalport.name AS "Arrival",
          arrivalport.location_code_iata AS "IATA Arrival Port",
          arrive_time AS "Arrival Time",
          departDate AS "Departure Date"
          FROM routes
          JOIN airlines ON airline_id = airlines.id
          JOIN airport AS departport ON departure = departport.id
          JOIN airport AS arrivalport ON arrival = arrivalport.id WHERE departport.location_code_iata = $1 OR departport.name =$1 AND airlines.iata_code=$2 OR airlines.name=$2`,
        [input1,input2]
      );

      return data.rows;
    }
     res.status(200).json({ status: true, payload: getRoute });
})

export default airlineNairport