import express from 'express';

import cors from 'cors';

import IngredientRouter from './services/Ingredients/IngredientRouter';
import RecipeRouter from './services/Recipes/RecipeRouter';

const app = express();
app.use(cors());
app.use(express.json());

app.use(IngredientRouter);
app.use(RecipeRouter);

app.listen(3333, () => {
  console.log('Happy hacking! 🤖');
});
