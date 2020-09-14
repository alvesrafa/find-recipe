import { celebrate, Joi, Segments } from 'celebrate';

export function ingredientPostValidator() {
  return celebrate({
    [Segments.BODY]: Joi.object({
      name: Joi.string().min(3).max(60).required(),
    }),
  });
}
