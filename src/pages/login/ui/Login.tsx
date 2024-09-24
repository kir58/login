import { FormProvider, useForm } from 'react-hook-form';
import { ValidationSchemaType } from '../model/types.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from '../model/validation.ts';
import Box from '@mui/material/Box';
import { CheckboxField, InputField } from '../../../shared/ui';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { defaultValues } from '../lib/constants.ts';
import { PasswordField } from './Fields/PasswordField.tsx';

export const Login = () => {
  const methodsForm = useForm<ValidationSchemaType>({
    resolver: zodResolver(validationSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isDirty, isValid },
  } = methodsForm;

  const onSubmit = async (data: ValidationSchemaType) => {
    console.log('SUCCESS', data);
  };

  return (
    <Box>
      <FormProvider {...methodsForm}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <InputField variant="outlined" margin="normal" fullWidth label="E-mail" name="email" />
          <PasswordField />
          <CheckboxField
            name="isRememberMe"
            label={
              <Typography
                color={(theme) => theme.palette.text.secondary}
                component="div"
                fontSize={13}
              >
                Remember Me
              </Typography>
            }
          />
          <Button
            disabled={!isDirty || !isValid}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </FormProvider>
    </Box>
  );
};
