const { MongoClient } = require('mongodb');

async function getUsers() {
  const client = await MongoClient.connect("mongodb://localhost:27017/");
  const db = client.db("reg");
  const users = await db.collection("user").find().limit(30).toArray();
  console.log(users);
  client.close();
}

getUsers();
