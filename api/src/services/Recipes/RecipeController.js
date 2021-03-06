import knex from '../../database/connection';

class RecipeController {
  async index(req, res, next) {
    try {
      const result = await knex.select('*').from('recipes');

      return res.status(200).json({ success: true, content: result });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        content: {
          message: 'Erro ao mostrar lista de receitas',
          error,
        },
      });
    }
  }

  async create(req, res, next) {
    const { ingredients, name, preparation } = req.body;

    try {
      const [recipe_id] = await knex('recipes').insert({ preparation, name });
      const recipe_ingredients = ingredients.map((ingredient) => {
        return {
          id_recipe: recipe_id,
          id_ingredient: ingredient,
        };
      });
      const result = await knex('recipes_has_ingredients').insert(
        recipe_ingredients
      );

      return res.json({ recipe_ingredients: result, recipe_id });
    } catch (error) {
      return res.status(400).json({
        success: false,
        content: {
          message: 'Erro ao cadastrar receita.',
          error,
        },
      });
    }
  }
  async update(req, res, next) {
    const { id } = req.params;
    const data = req.body;
    try {
      await knex('recipes')
        .update({
          ...data,
          updated_at: new Date(),
        })
        .where({ id });
      return res.status(200).json({
        success: true,
        content: {
          message: 'Receita atualizado com sucesso!',
        },
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        content: {
          message: 'Erro ao atualizar receita.',
          error,
        },
      });
    }
  }
  async delete(req, res, next) {
    const { id } = req.params;
    try {
      const [recipe] = await knex('recipes').where({ id });
      if (!recipe) {
        return res.status(400).json({
          success: false,
          content: {
            message: 'Receita não encontrada.',
            error,
          },
        });
      }
      const message = recipe.deleted_at ? 'Restaurada' : 'Deletada';
      const statsDeleted = recipe.deleted_at ? null : new Date();

      await knex('recipes')
        .update({
          deleted_at: statsDeleted,
        })
        .where({ id });

      return res.status(200).json({
        success: true,
        content: {
          message: `recipee ${message} com sucesso.`,
        },
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        content: {
          message: 'Erro ao deletar recipee',
          error,
        },
      });
    }
  }
}

export default new RecipeController();
