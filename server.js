
const app = require("./app");
const express = require('express')

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 5005;

//The express.json() parses incoming requests with JSON payloads and is based on body-parser.
//The express.urlencoded() is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/api/hello", (req, res) => {
  res.status(200).send("Hello World!");
 });

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
