const express =require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
//Import Routes
const authRoute=require('./routes/auth');

dotenv.config();

//Connect DB

mongoose.connect(process.env.DB_CONNECT,
()=>console.log('Connected to DB'));

//Middlewear
app.use(express.json());
//Route Middlewares
app.use('/api/user',authRoute);


 

app.listen(3000,()=>console.log('Running'));