const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
app.get("/register", (req, res) => {
  res.send("Standard GET Response");
});

app.post("/register", (req, res) => {
  res.send("Standard GET Response");
});
