import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());  

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.log('Error connecting to MongoDB:', err));



app.get("/api/ping", (req, res) => {
    res.status(200).send("Server is awake!");
  });
  

app.listen(port, ()=> {
    console.log(`Server is running at port ${port}...`)
});

