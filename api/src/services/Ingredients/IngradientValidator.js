import { celebrate, Joi, Segments } from 'celebrate';
export function ingredientPostValidator() {
  return celebrate({
    [Segments.BODY]: Joi.object({
      name: Joi.string().min(3).max(60).required(),
    }),
  });
}
export function ingredientPutValidator() {
  return celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.number().min(1).required(),
    }),
    [Segments.BODY]: Joi.object({
      name: Joi.string().min(3).max(60).required(),
    }),
  });
}
export function ingredientDeleteValidator() {
  return celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.number().min(1).required(),
    }),
  });
}
