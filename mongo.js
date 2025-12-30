import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

try {
  await client.connect();
  console.log("connected !");
} catch (error) {
  console.log(error.message);
}

const DB = client.db("cars");
const collection = DB.collection("cars");

await collection.createIndex({ model: 1 });
await collection.createIndex({ vandor: 1 });
await collection.createIndex({ type: 1 });

// const car = await collection.insertOne({
//   model: 2022,
//   vandor: "Toyota",
//   type: "siena",
//   owner: "Efraim Gottlieb",
// });
// console.log(car)
// const findCar = await collection.findOne({ username: "Efraim" });
const findCar = await collection.find().toArray()
console.log(findCar);

client.close();