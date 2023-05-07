//requiriendo express basico y configurandolo
const express = require("express");
const server = express();
const port = 8080;

//configuracion de rutas
const path = require("path");

//configuracion de static
server.use(express.static("public"));

//home
server.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname + "/views/home.html"));
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
