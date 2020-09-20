import express from 'express';
import IngredientController from './IngredientController';
const router = express.Router();
import {
  ingredientPostValidator,
  ingredientPutValidator,
  ingreditDeleteValidator,
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
  ingreditDeleteValidator(),
  IngredientController.delete
);

export default router;
