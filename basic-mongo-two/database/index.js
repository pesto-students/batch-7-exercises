const { MongoClient, ObjectID } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'pesto-day-19';

let connectionInstance;

const getDbClient = async () => {
  if (!connectionInstance) {
    connectionInstance = await MongoClient.connect(MONGO_URL, { useNewUrlParser: true }).catch(
      (ex) => {
        throw new Error(`Error in connecting to DB: ${ex}`);
      },
    );
  }
  return connectionInstance;
};

const getDb = async () => {
  if (!connectionInstance) await getDbClient();
  return connectionInstance.db(DB_NAME);
};

const getAllProjects = async () => {
  const db = await getDb();
  const data = await db
    .collection('projects')
    .find({}, { developer: 1, project: 1 })
    .toArray();
  return data;
};

const getProjectById = async (id) => {
  const db = await getDb();
  const data = await db
    .collection('projects')
    .findOne({ _id: new ObjectID(id) }, { developer: 1, project: 1 });
  return data || {};
};

const addProjects = async (data) => {
  const db = await getDb();
  const insertedCount = await db.collection('projects').insertMany(data);
  return insertedCount;
};

module.exports = {
  getDb,
  getDbClient,
  getAllProjects,
  getProjectById,
  addProjects,
};
