import "dotenv/config";

import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to server Endpoint");
});

app.listen(PORT, (err) => {
  err & console.log(err);

  console.log(`Your Server is running in http://localhost:${PORT}`);
});
