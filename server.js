const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./services/db");
require("dotenv").config();

connectDB();

const transactions = require("./routes/transactions");

const app = express();

app.use(express.json());

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
  )
);
