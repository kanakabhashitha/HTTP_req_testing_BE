import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  let data = req.body;
  res.send("Data Received: " + JSON.stringify(data));
  console.log(data);
});

app.post("/api/test", (req, res) => {
  let data = req.body;
  res.send("Data Received: " + JSON.stringify(data));
  console.log(data);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000!");
});
