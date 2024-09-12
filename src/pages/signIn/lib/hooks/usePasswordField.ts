import { useController, UseFormReturn } from 'react-hook-form';
import { getPasswordSchema } from '../../model/validation.ts';
import { ValidationSchemaType } from '../../model/types.ts';

export const usePasswordField = (methodsForm: UseFormReturn<ValidationSchemaType>) => {
  const { getValues, control } = methodsForm;
  const { email } = getValues();
  const { field: passwordField } = useController({ name: 'password', control });
  const passwordIssues =
    getPasswordSchema(email).safeParse(passwordField.value).error?.issues ?? [];

  return {
    passwordIssues,
    passwordField,
  };
};
