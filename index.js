import express from "express";
import dotenv from 'dotenv';
import { connection, connectDB } from './config/db.js';
import cors from 'cors';
import leaderRoute from './routes/leaderRoute.js'

dotenv.config()

const app = express();


connectDB();


app.use(cors());
app.use(express.json());

app.use('/api/v1/leaderboard',leaderRoute)


//CONNECT TO PORT
const PORT = process.env.PORT || 8080

app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`)
})