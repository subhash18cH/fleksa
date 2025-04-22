import express, { json, urlencoded } from "express";
import { router } from "./routes/booking"
const app = express();

import dotenv from "dotenv"
dotenv.config();

import cors from 'cors';

const corsOptions = {
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST'],
  credentials: true,
};
app.use(cors(corsOptions));


app.use(json());
app.use(urlencoded({ extended: true }))

//route for event booking
app.use("/api", router)

//route for homepage
app.get("/", (req, res) => {
  res.send("Welcome to Event Booking System")
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port:${process.env.PORT}`);
});
