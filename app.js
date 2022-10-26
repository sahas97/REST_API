const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

// Middle ware
app.use(bodyParser.json());

//import routes
// Routes

// GET() get the data from database
const getRoute = require("./routes/get");
app.use("/get", getRoute);

// Post() push the data to database
const postRoute = require("./routes/post");
app.use("/post", postRoute);

// Patch() update data in the database
const patchRoute = require("./routes/patch");
app.use("/patch", patchRoute);

// DELETE() Delete data in databse

const deleteRoute = require("./routes/delete");
app.use("/delete", deleteRoute);

//conect to the database
mongoose.connect(process.env.CONNECTION_STRING, () => {
    console.log('Conected to database');
})

//listen to the port
app.listen(process.env.PORT, 3000, ()=>{
    console.log('Listen to the port 3000');
})