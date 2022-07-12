import express from "express";
import fs from "fs";
import { upload } from "../dbConfig/fileConfig.js";
import { getBlog, postBlog } from "../module/BlogModule.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("You are hitting get router");
});

router.post("/", upload.single("testImage"), async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const image = {
    date: fs.readFileSync("uploads/" + req.file.filename),
    contentType: "image/png",
  };

  try {
    const result = await postBlog({ title, description, image });

    res.json({
      status: "success",
      message: "Blog Posted successfully",
      result,
    });

    return res.json({
      status: "error",
      message: "Cannot post your Blog Please try again later",
    });
  } catch (error) {
    console.log(error);
  }

  console.log(req.body);
});

router.put("/", (req, res) => {
  res.send("You are hitting put router");
});

router.delete("/", (req, res) => {
  res.send("You are hitting delete router");
});

export default router;
