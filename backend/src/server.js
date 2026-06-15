import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();
connectDB();
const app = express();

// Middleware setup 
app.use(cors());
app.use(express.json());


export default app;