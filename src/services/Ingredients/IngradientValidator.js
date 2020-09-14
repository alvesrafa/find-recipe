import Joi from 'joi';

const IngredientSchema = Joi.object({
  name: Joi.string()
    .min(3, 'Mínimo de 3 caracteres')
    .max(60, ' Máximo de 60 caracteres')
    .required('O nome do ingrediente é obrigatório'),
});
