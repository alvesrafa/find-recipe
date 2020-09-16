import knex from '../../database/connection';

class IngredientController {
  async index(req, res, next) {
    try {
      const result = await knex('ingredients');

      res.status(200).json({ success: true, content: result });
    } catch (error) {
      res.status(400).json({
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

      res.status(200).json({
        success: true,
        content: {
          message: 'Ingrediente cadastrado com sucesso! ',
        },
      });
    } catch (error) {
      res.status(400).json({
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
      res.status(200).json({
        success: true,
        message: 'Ingrediente atualizado com sucesso!',
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        content: {
          message: 'Erro ao atualizar ingrediente',
          error,
        },
      });
    }
  }
}

export default new IngredientController();
