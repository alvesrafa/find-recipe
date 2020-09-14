import express from 'express';
import IngredientController from './IngredientController';
const router = express.Router();

router.get('/ingredients', IngredientController.index);
router.post('/ingredients', IngredientController.create);
router.put('/ingredients', IngredientController.index);
router.delete('/ingredients', IngredientController.index);

export default router;
