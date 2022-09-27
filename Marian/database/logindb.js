const { MongoClient } = require('mongodb');
const mongoose=require('mongoose');

const url = "mongodb+srv://Nikita:Nikita2194@atlascluster.segg7kg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function connectionDb(){
    await client.connect();
}

async function getClient(){
    return client;
}
async function mongooseUrl(){
    return mongoose.connect(url);
}
module.exports={connectionDb,getClient,mongooseUrl}