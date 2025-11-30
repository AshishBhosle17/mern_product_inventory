const connectDb = require ("./db/db");
const userSchema = require('../backend/models/userModel');
const express = require("express");
const cors = require("cors");

const app = express();
connectDb();

app.use(express.json());

app.use("/api", userSchema);

app.listen(3000, () => {
    console.log("server is running....");

})