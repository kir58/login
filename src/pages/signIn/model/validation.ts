import { z, ZodType } from 'zod';
import { ErrorType, ValidationSchemaType } from './types.ts';

const isPasswordContainEmail = (password: string, email: string) => {
  const numConsecutiveChars = 4;

  const invalidCombinations = [];

  for (let i = 0; i < email.length - numConsecutiveChars; i += 1) {
    const curCombination = email[i] + email[i + 1];
    invalidCombinations.push(curCombination);
  }

  for (let i = 0; i < invalidCombinations.length; i += 1) {
    const curCombination = invalidCombinations[i];
    if (password.indexOf(curCombination) !== -1) {
      return true;
    }
  }

  return false;
};

export const getPasswordSchema = (email: string) =>
  z
    .string()
    .min(8, { message: ErrorType.AtLeast8Characters }) // Minimum 8 characters
    .regex(/[A-Z]/, { message: ErrorType.OneMoreCapitalizeLetter }) // At least one uppercase letter
    .regex(/[0-9!@#$%^&*(),.?":{}|<>]/, { message: ErrorType.ContainsNumberOrSymbol }) // At least one number or symbol
    .refine(
      (password) => !isPasswordContainEmail(password, email), // Example for email check
      { message: ErrorType.CantContentEmail },
    );

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const validationSchema: ZodType<ValidationSchemaType> = z.object({
  email: z.string().min(1, { message: 'Enter Email' }).email('Wrong type of e-mail'),
  password: z.string().min(1, { message: 'Enter Password' }),
  referralCode: z.string(),
  isAccepted: z.boolean().refine(Boolean),
  phoneNumber: z
    .string()
    .min(1, { message: 'Enter Phone Number' })
    .regex(phoneRegex, 'Wrong phone number'),
});
