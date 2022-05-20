const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const causaController = require("./Controller/causa.controller.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/api/causas/:id", (req, res) => {
  causaController.getCausa(req.params.id).then((data) => res.json(data));
});

app.get("/api/causas", (req, res) => {
  causaController.getCausas().then((data) => res.json(data));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
