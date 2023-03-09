const express=require('express');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());
const{MongoClient}=require('mongodb');
//const MongoClient=require('mongodb').MongoClient;
const urli='mongodb://127.0.0.1:27017';
const database='Resume';
const client=new MongoClient(urli);
app.get("/home",async (req,res)=>{
    let result=await client.connect();
    let dbi=result.db(database);
    var colls=await dbi.listCollections().toArray();
    colls=colls.map((item)=>{
        return item.name;
    });
    //console.log(colls);
    res.send(colls);
})
app.get("/home/:coll",async (req,res)=>{
    //console.warn(req.params.coll);
    let result=await client.connect();
    let dbi=result.db(database);
    const collection = dbi.collection(req.params.coll);
    //console.log(collection);
    const items=await collection.find({}).toArray();
    //console.log(items);
    res.send(items);
      
})
app.listen(1200);