import express from "express";
import RecipeController from "./RecipeController";
const router = express.Router();

router.get("/recipes", RecipeController.index());


export default router;
