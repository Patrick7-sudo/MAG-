import query from "../index.js";

const airport = "CREATE TABLE IF NOT EXISTS airport (id SERIAL NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL, location_code_iata VARCHAR(255) NOT NULL,country VARCHAR(255) NOT NULL);";

const airline = "CREATE TABLE IF NOT EXISTS airlines (id SERIAL NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL,iata_code VARCHAR(255) NOT NULl, country_origin VARCHAR(255) NOT NULL);";

const route = "CREATE TABLE IF NOT EXISTS routes (id SERIAL NOT NULL PRIMARY KEY,flight_num INT NOT NULL, departure INT NOT NULL, depart_time time NOT NULL, arrival INT NOT NULL, arrive_time time NOT NULL, departDate date NOT NULL, airline_id INT NOT NULL,FOREIGN KEY(departure) REFERENCES airport(id),FOREIGN KEY(arrival) REFERENCES airport(id), FOREIGN KEY(airline_id) REFERENCES airlines(id));";

async function createAirport(){
    const res =await query(airport);
}

async function createAirline() {
  const res = await query(airline);
}

async function createRoute() {
  const res = await query(route);
}

// createAirline()
// createAirport()
createRoute()

// const deleteAirports ="DROP Table airport"
// const deleteAirline = "DROP Table airlines";
// const deleteroutes = "DROP Table routes";

// async function deleteAirport(){
//     const res = await query(deleteAirports);
//     const res1 = await query(deleteAirline);
//     // const res2 = await query(deleteroutes);
// }
// deleteAirport()