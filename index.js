const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./server/database/connection");

const PORT = process.env.PORT || 3000;
//Import Routes
const userRouter = require("./server/routes/userRouter");
const loginRouter = require("./server/routes/loginRouter");
const resetPasswordRouter = require("./server/routes/resetPasswordRouter");



const sendMail = require("./server/services/emailService")




dotenv.config();

//Connect DB

connectDB();

//Middlewear
app.use(express.json());
//Route Middlewares
app.use("/api/users", userRouter);
app.use("/api/users", loginRouter);
app.use("/api/users", resetPasswordRouter);



app.listen(PORT, () => console.log("Running"));





