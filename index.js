const express = require('express');
const shortid = require('shortid');
const {Connection} = require("./config/db")
const {urlRouter} = require("./routes/url.route")
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/",urlRouter)

app.listen(PORT,async()=>{
  try {
      await Connection
      console.log("Connected to DB")
  } catch (error) {
      console.log('failed to connect to DB')
  }
  console.log(`Server running @ ${PORT}`);
})
