import express from 'express'
import query from "../sql/index.js"
import airline from '../dummydata.js'

const airlineRouters = express.Router();

airlineRouters.get("/", async(req,res)=>{
    const allData = await getAllAirline();

    async function getAllAirline(){
        const data = await query(`SELECT * FROM airlines ORDER BY id ASC`)
        return data.rows
    }
    res.json({success:true, payload:{allData}})
})

airlineRouters.post('/', async(req,res)=>{
    const rawData =req.body;
    console.log(rawData)
    const insertAirlineInfo = await airlineDataInput(rawData)
    async function airlineDataInput(rawData){
        const name =rawData.name;
        const iata =rawData.iata;
        const country = rawData.country;

        const data = await query('INSERT INTO airlines (name,iata_code,country_origin) VALUES ($1,$2,$3)',[name,iata,country])

    }

    res.json({ success: true, payload: { rawData } });
})

airlineRouters.get('/:id', async(req,res)=>{
    const{id}= req.params;
    const numID =Number(id);
    const getIndidivualAirline= await getIndividual(numID);

    async function getIndividual(input){
        const data = await query(`SELECT * FROM airlines WHERE ID =$1`,[input])
        return data.rows
    }
    res.json({success:true,payload:{getIndidivualAirline}})
})

airlineRouters.delete('/:id', async(req,res)=>{
    const {id} = req.params;
    const numID = Number(id);

    const deleteAirlineIndividual = await deleteAirlineID(numID)    

    async function deleteAirlineID(input){
        const data = await query(`DELETE FROM airlines WHERE id=$1`,[input])

        const retriveNew = await query(`SELECT * FROM airlines`)

        return retriveNew.rows
    }

    res.status(200).json({deleteAirlineIndividual})

})

airlineRouters.put('/:id', async(req,res)=>{
    const {id} = req.params;
    const numID = Number(id);
    const newData = req.body;

    const updateAirlineByID = await updateNewData(newData,numID)
    async function updateNewData(input,index){

         const name =input.name;
        const iata =input.iata;
        const country = input.country;

        const data = await query('UPDATE airlines SET name=$1,iata_code=$2,country_origin=$3 WHERE id=$4',[name,iata,country,index])

        // return data.rows;

        const returnall= await query('SELECT * FROM airlines')

        return returnall.rows
    }

    res.status(200).json({sucess:true,payload:{updateAirlineByID}})  
})



export default airlineRouters;