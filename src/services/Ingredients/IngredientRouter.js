import express from "express";
import IngredientController from "./IngredientController";
const router = express.Router();

router.get("/ingredients", IngredientController.index());


export default router;