import express from 'express';
import IngredientController from './IngredientController';
const router = express.Router();
import {
  ingredientPostValidator,
  ingredientPutValidator,
  ingredientDeleteValidator,
} from './IngradientValidator';

router.get('/ingredients', IngredientController.index);

router.post(
  '/ingredients',
  ingredientPostValidator(),
  IngredientController.create
);

router.put(
  '/ingredients/:id',
  ingredientPutValidator(),
  IngredientController.update
);
router.delete(
  '/ingredients/:id',
  ingredientDeleteValidator(),
  IngredientController.delete
);

export default router;
