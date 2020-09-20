import express from 'express';
import RecipeController from './RecipeController';
import { recipePostValidator } from './RecipeValidator';
const router = express.Router();

router.get('/recipes', RecipeController.index);
router.post('/recipes', recipePostValidator(), RecipeController.create);
router.put('/recipes/:id', RecipeController.update);
router.delete('/recipes/:id', RecipeController.delete);

export default router;
