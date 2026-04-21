require("dotenv").config(); 

const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


// login MongoDB
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("rapus");
    console.log("MongoDB connecté");
  } catch (error) {
    console.error("Erreur de connexion MongoDB :", error);
  }
}

connectDB();

// ROUTES CRUD


// CREATE : POST /items
app.post("/items", async (req, res) => {
  const result = await db.collection("artists").insertOne(req.body);
  res.send(result);
});

// READ : GET /items
app.get("/items", async (req, res) => {
  const items = await db.collection("artists").find().toArray();
  res.send(items);
});

// READ : GET /items/:id
app.get("/items/:id", async (req, res) => {
  const item = await db.collection("artists").findOne({
    _id: new ObjectId(req.params.id)
  });
  res.send(item);
});

// ROUTE DE RECHERCHE

// GET /search?keyword=...&style=...
app.get("/search", async (req, res) => {
  const { keyword, style } = req.query;

  const query = {
    $or: [
      { name: { $regex: keyword, $options: "i" } },
      { description: { $regex: keyword, $options: "i" } }
    ]
  };

  if (style) {
    query.style = style;
  }

  const results = await db.collection("artists").find(query).toArray();
  res.send(results);
});

// SERVEURÒ

app.listen(3000, () => {
  console.log("API Rap US en marche sur http://localhost:3000");
});
