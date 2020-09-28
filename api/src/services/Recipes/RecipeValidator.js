import { celebrate, Joi, Segments } from 'celebrate';

export function recipeIndexValidator() {
  return celebrate({
    [Segments.PARAMS]: Joi.object({
      //Parametros de busca
    }),
  });
}
export function recipePostValidator() {
  return celebrate({
    [Segments.BODY]: Joi.object({
      name: Joi.string().min(3).max(60).required(),
      preparation: Joi.string().min(6).max(255).required(),
      ingredients: Joi.array().items(Joi.number().min(1).required()),
    }),
  });
}
export function recipePutValidator() {
  return celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.number().min(1).required(),
    }),
    [Segments.BODY]: Joi.object({
      name: Joi.string().min(3).max(60).required(),
    }),
  });
}
export function recipeDeleteValidator() {
  return celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.number().min(1).required(),
    }),
  });
}
