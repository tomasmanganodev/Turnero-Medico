//Import path
const path = require("path");
//Import express
const express = require("express");
//Import archivo “Database”
const db = require("./util/Database");
//Import body-parser
const bodyParser = require("body-parser");
//Import express()
const app = express();
//Import archivo auth
const authRoutes = require("./routes/auth");
//Import archivo calendar
const calendarRoutes = require("./routes/calendar");
//Import archivo admin
const adminRoutes = require("./routes/admin");

// Este codigo se utiliza para otorgar un correcto funcionamiento del REST API
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//Este codigo es para establecer las routas
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);
app.use(calendarRoutes);

//Iniciar la app
app.listen(3333);
