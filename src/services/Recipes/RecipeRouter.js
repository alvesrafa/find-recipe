import express from 'express';
import RecipeController from './RecipeController';
const router = express.Router();

router.get('/recipes', RecipeController.index);
router.post('/recipes', RecipeController.index);
router.put('/recipes', RecipeController.index);
router.delete('/recipes', RecipeController.index);

export default router;
