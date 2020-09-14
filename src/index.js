import express from 'express';

import IngredientRouter from './services/Ingredients/IngredientRouter';
import RecipeRouter from './services/Recipes/RecipeRouter';

const app = express();
app.use(express.json());

app.use(IngredientRouter);
app.use(RecipeRouter);

app.listen(3000, () => {
  console.log('Happy hacking! 🤖');
});
