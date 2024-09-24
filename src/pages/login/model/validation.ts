import { z, ZodType } from 'zod';
import { ValidationSchemaType } from './types.ts';

export const validationSchema: ZodType<ValidationSchemaType> = z.object({
  email: z.string().min(1, { message: 'Enter Email' }).email('Wrong type of e-mail'),
  password: z.string().min(8, { message: 'Minimum 8 characters' }),
  isRememberMe: z.boolean(),
});
