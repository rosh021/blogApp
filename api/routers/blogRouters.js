import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("You are hitting get router");
});

router.post("/", (req, res) => {
  res.send("You are hitting post router");
});

router.put("/", (req, res) => {
  res.send("You are hitting put router");
});

router.delete("/", (req, res) => {
  res.send("You are hitting delete router");
});

export default router;
