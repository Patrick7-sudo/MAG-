import express from 'express';
import airline from "../dummydata.js";
import query from "../sql/index.js"

const routers = express.Router();

routers.get("/", async(req, res) => {
    const getAll =await getAllSQL();
    
    async function getAllSQL(){
        const data =  await query(`SELECT * FROM airport ORDER BY id ASC`)
        return data.rows
    }

  res.status(200).json({ sucess: true, payload: getAll });
});
//get by id
routers.get("/:id", async (req, res) => {
  const { id } = req.params;
const numID=Number(id);
const displayindividualData = await specificID(numID);

  async function specificID(input){
      const data = await query(`SELECT * FROM airport WHERE id=$1`,[input]);
      return data.rows;
  }
  res.json({ success: true, payload: {displayindividualData} });
});

routers.post("/", async(req, res) => {
  const data = req.body;
  const name = data.name;
  const iata = data.iata;
  const country = data.country
  const addData =await addInput(data)
  
  async function addInput(input){
    const add = await query(`INSERT INTO airport(name,location_code_iata,country) VALUES ($1,$2,$3)`,[name,iata,country]);
    return add.rows
  }

  res.json({ success: true, payload: data });
});

routers.delete("/:id", async (req, res) => {
  const { id } = req.params;
  
  const removing = await deleteData(id);

  async function deleteData(id){
      const removeData = await query('DELETE FROM airport WHERE id=$1',[id])

      return removeData.rows
  }
  res.json({ success: true, payload: id });
});

routers.put("/:id", async(req, res) => {
  const { id } = req.params;
  const idNum=Number(id)
  const data = req.body;
  
  const update= await updateData(idNum,data);

   async function updateData(id,newValue){
    const name = newValue.name;
    const iata = newValue.iata;
    const country = newValue.country;
    const data = await query('UPDATE airport SET name=$1, location_code_iata=$2,country=$3 WHERE id=$4',[name,iata,country,id]);

    return data.rows
   }
  
//   console.log(id);
//   console.log(data);
  res.json({ success: true, payload: update });
});

export default routers;
