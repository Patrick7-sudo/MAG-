import express from "express";
import query from "../sql/index.js"

const airlineIndividual = express.Router();

airlineIndividual.get("/", async (req,res)=>{
const hello = req.query;

console.log(hello.color);

const getRoute = await getIndividualRoute(hello.color);

async function getIndividualRoute(input) {
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
          JOIN airport AS arrivalport ON arrival = arrivalport.id WHERE airlines.iata_code = $1 OR airlines.name =$1`,
    [input]
  );

  return data.rows;
}

res.status(200).json({ status: true, payload: getRoute });
})

export default airlineIndividual;