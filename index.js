require("dotenv").config;

const conectDataBase = require("./src/lib/db");
const { request } = require("express");
const server = require("./server");

conectDataBase().then(() => {
  console.log("DB connected");
  server.listen(3000, () => {
    console.log("servers is listening in port 3000");
  });
});
