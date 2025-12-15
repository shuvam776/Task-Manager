import express from 'express'
const app = express()
import cors from "cors"
import connectDB from './db/index.js'
import cookieParser from 'cookie-parser';
import router from './routes/authroutes.js';
import dotenv from 'dotenv';
dotenv.config()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended:true,limit : "16kb"}))
app.use(express.static('public'));
app.use(cookieParser());


//appi routes
import authRouter from "./routes/authroutes.js"
app.use('/',authRouter)


export default app