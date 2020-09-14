import express from 'express';
import IngredientController from './IngredientController';
const router = express.Router();
import { ingredientPostValidator } from './IngradientValidator';

router.get('/ingredients', IngredientController.index);

router.post(
  '/ingredients',
  ingredientPostValidator(),
  IngredientController.create
);

router.put('/ingredients', IngredientController.index);

router.delete('/ingredients', IngredientController.index);

export default router;
