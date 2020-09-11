import knex from "../../database/connection";

class RecipeController {
  async index(req, res, next) {
    try {
      const result = await knex("recipes");

      res.status(200).json({ success: true, content: result });
    } catch (error) {
      res.status(400).json({ success: false, content: error });
    }
  }
}

export default new RecipeController();
