import express from "express";
import knex from "./src/database/connection";

const app = express();
app.use(express.json());

app.get("/", async (req, res, next) => {
  try {
    const result = await knex("recipes");

    res.status(200).json({ success: true, content: result });
  } catch (error) {
    res.status(400).json({ success: false, content: error });
  }
});

app.listen(3000, () => {
  console.log("Happy hacking! 🤖");
});
