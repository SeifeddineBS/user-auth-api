const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const connectDB = require("./server/database/connection");

const PORT = process.env.PORT || 3000;
//Import Routes
const userRouter = require("./server/routes/userRouter");
const loginRouter = require("./server/routes/loginRouter");


dotenv.config();

//Connect DB

connectDB();

//Middlewear
app.use(express.json());
//Route Middlewares
app.use("/api/users", userRouter);
app.use("/api/users", loginRouter);


app.listen(PORT, () => console.log("Running"));
