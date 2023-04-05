import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.string().required(),
  PORT: Joi.number().default(3001).required(),
  DEFAULT_LIMIT: Joi.number().default(6),
});
