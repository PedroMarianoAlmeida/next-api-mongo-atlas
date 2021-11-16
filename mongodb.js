//Add in your Next.js project, path: pages/api/mongodb.js

/*
This code is licensed under the "The Unlicense".
A license with no conditions whatsoever which dedicates works to the public domain. 
Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.

In short terms, you can use any way you want, but I appreciate if you hit the star button on the original repo
https://github.com/PedroMarianoAlmeida/next-api-mongo-atlas
=D
 */

//-------CONNECTION------------------------------------------
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const client = new MongoClient(uri, options);

const connect = async () => {
  if (!client.isConnected) await client.connect();
  return client;
};

export async function getDatabase(dbName) {
  const client = await connect();
  const db = client.db(dbName);
  return db;
}

export async function getCollection(dbName, collectionName) {
  const dbCloud = await getDatabase(dbName);
  const collection = dbCloud.collection(collectionName);
  return collection;
}
//------------------------------------------------------------
const requestValidation = (mongo) => {
  const { db, collection, action, data } = mongo;
  if (!db) return { ok: false, message: "missing database name" };
  // if (!collection) return { ok: false, message: "missing collection name" };
  if (!action) return { ok: false, message: "missing action" };
  // if (!data) return { ok: false, message: "missing data object" };
  return { ok: true, message: "" };
};

const responseTreatment = async (mongo, response) => {
  // https://docs.mongodb.com/drivers/node/current/fundamentals/crud/read-operations/cursor/
  const collectionFunctionsDirectlyReturnCursors = [
    'find',
    'aggregate',
    'listIndexes',
  ]
  const dbFunctionsDirectlyReturnCursors = ['aggregate', 'listCollections']

  const { db, collection, action, data } = mongo

  if (collection === '' && dbFunctionsDirectlyReturnCursors.includes(action))
    return await response.toArray()
  if (collectionFunctionsDirectlyReturnCursors.includes(action))
    return await response.toArray()

  return response
}

export default async function handler(req, res) {
  const { mongo } = req.body;
  const { db, collection, action, data } = mongo;

  const validation = requestValidation(mongo);

  if (!validation.ok) res.status(400).json({ message: validation.message });
  let mongoCloud;

  if (db && collection) {
    mongoCloud = await getCollection(db, collection);
  } else mongoCloud = await getDatabase(db);

  let response = await mongoCloud[action](data);
  if (!response) return res.status(404);
  
  const responseTreated = await responseTreatment(mongo, response)
  res.status(200).json(responseTreated);
}
