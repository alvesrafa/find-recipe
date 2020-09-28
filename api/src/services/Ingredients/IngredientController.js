import knex from '../../database/connection';

class IngredientController {
  async index(req, res, next) {
    try {
      const result = await knex('ingredients').where({ deleted_at: null });

      return res.status(200).json({ success: true, content: result });
    } catch (error) {
      return res.status(400).json({
        success: false,
        content: {
          message: 'Erro ao mostrar lista de ingredientes',
          error,
        },
      });
    }
  }

  async create(req, res, next) {
    const data = req.body;
    try {
      const [id] = await knex('ingredients').insert(data);

      return res.status(200).json({
        success: true,
        content: {
          message: 'Ingrediente cadastrado com sucesso! ',
        },
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        content: {
          message: 'Erro ao cadastrar ingrediente',
          error,
        },
      });
    }
  }
  async update(req, res, next) {
    const { id } = req.params;
    const data = req.body;
    try {
      await knex('ingredients')
        .update({
          ...data,
          updated_at: new Date(),
        })
        .where({ id });
      return res.status(200).json({
        success: true,
        content: {
          message: 'Ingrediente atualizado com sucesso!',
        },
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        content: {
          message: 'Erro ao atualizar ingrediente',
          error,
        },
      });
    }
  }
  async delete(req, res, next) {
    const { id } = req.params;
    try {
      const [ingredient] = await knex('ingredients').where({ id });
      if (!ingredient) {
        return res.status(400).json({
          success: false,
          content: {
            message: 'Ingrediente não encontrado.',
            error,
          },
        });
      }
      const message = ingredient.deleted_at ? 'Restaurado' : 'Deletado';
      const statsDeleted = ingredient.deleted_at ? null : new Date();

      await knex('ingredients')
        .update({
          deleted_at: statsDeleted,
        })
        .where({ id });

      return res.status(200).json({
        success: true,
        content: {
          message: `Ingrediente ${message} com sucesso.`,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        content: {
          message: 'Erro ao deletar ingrediente',
          error,
        },
      });
    }
  }
}

export default new IngredientController();
