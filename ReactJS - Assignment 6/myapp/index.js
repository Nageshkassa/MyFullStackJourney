const express = require("express");
const app = express();
const PORT = 3001;

app.get("/test", (req, res) => {
  console.log("Received GET request:");
  console.log("Request Headers:", req.headers);

  res.set("Custom-Header", "Hello from Server");
  res.status(200).send("GET Request Received ");
});

app.post("/test1", (req, res) => {
  console.log("Received POST request :");
  console.log("Request Headers:", req.headers);

  res.status(200).send("POST Request Received");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
