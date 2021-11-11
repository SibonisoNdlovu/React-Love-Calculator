// server/index.js
const express = require("express");
const axios =  require("axios");
const stringify = require('json-stringify-safe');
const app = express();
const { LoveCalculator } = require("./LoveCalculator");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());;

const PORT = 3001;

app.post("/calcLove", (req, res) => {
  try {
    const loveCalculatorObj =new LoveCalculator(JSON.parse(req.body.data));
    let percentage = loveCalculatorObj.calculateLovePercentage();
    res.send({data: percentage});
  } catch (error) {
    console.log("error",error)
  }
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});