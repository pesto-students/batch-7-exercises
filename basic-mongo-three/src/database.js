const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'video2';

let connectionInstance;

export const getDbClient = async () => {
  if (!connectionInstance) {
    connectionInstance = await MongoClient.connect(MONGO_URL, { useNewUrlParser: true });
  }
  return connectionInstance;
};

export const getDb = async () => {
  await getDbClient();

  if (!connectionInstance) {
    throw new Error('Db not connected');
  }

  return connectionInstance.db(DB_NAME);
};
