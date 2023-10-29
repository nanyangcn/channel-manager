import { MongoClient, Db } from 'mongodb';

let client: MongoClient;
let db: Db;

const connectMongo = async () => {
  client = new MongoClient(process.env.MONGODB_URI!);
  await client.connect();
};

const closeMongo = async () => {
  await client.close();
};

const getDb = () => {
  db = client.db(process.env.MONGODB_NAME);
  return db;
};

export {
  connectMongo,
  closeMongo,
  getDb,
};
