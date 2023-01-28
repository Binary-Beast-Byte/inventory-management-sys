const express = require('express');
const app = express();

app.use(express.json());
//dotenv initialization
require('dotenv').config();

const Port = 5001;

const db = require('./models');



//cors policy
const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content_Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});

const itemRouter = require('./routes/ItemRoutes');
app.use("/item", itemRouter)

db.sequelize.sync().then(() => {
    app.listen(Port, () => {
        console.log(`running on port ${Port}`);
    });
});