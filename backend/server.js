const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");


const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("Connected to MongoDB")
}).catch(()=>{
  console.log("Failed to connect to MongoDB")
})

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use("/", require("./routes/authRoutes"))

const db = mongoose.connection;

// const corsOptions = {
//   origin: "http://localhost:5173"
// }

app.get("/user-data/api", async (req,res)=>{

  let users = await db.collection('users').find().toArray();
  res.json(users)
})

// app.use(cors(corsOptions));

// app.get("/api", async (req, res) => {

//   const result = await mongoose.model('userModel',{
//     "name":"Devansh",
//     "age":20,
//     "occupation":"Student"
//   })
//   await db.collection("users").insertOne(result)

//   let users = await db.collection('users').find().toArray();
  
//   res.json({"hello":"HELO"});
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})