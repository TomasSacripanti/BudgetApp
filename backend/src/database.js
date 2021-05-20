const {MongoClient} = require('mongodb');
const URI = `mongodb+srv://tomisacripanti:<${process.env.DB_PASSWORD}>@cluster0.5rgbw.mongodb.net/budgetAppDB?retryWrites=true&w=majority`;
const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Database connected!");
  client.close();
});