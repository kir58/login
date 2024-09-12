import { Link, InputField, CheckboxField } from '../../../shared/ui';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ValidationSchemaType } from '../model/types.ts';
import { validationSchema } from '../model/validation.ts';
import { PasswordField } from './Fields/PasswordField.tsx';
import { ReferralCodeField } from './Fields/ReferralCodeField.tsx';
import { defaultValues } from '../lib/constants.ts';
import { usePasswordField } from '../lib/hooks/usePasswordField.ts';
import Button from '@mui/material/Button';

export const SignIn = () => {
  const methodsForm = useForm<ValidationSchemaType>({
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
    reValidateMode: 'onBlur',
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: true,
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    formState: { isDirty, errors },
  } = methodsForm;

  const onSubmit = async (data: ValidationSchemaType) => {
    console.log('SUCCESS', data);
  };

  const { passwordIssues, passwordField } = usePasswordField(methodsForm);

  return (
    <Box>
      <FormProvider {...methodsForm}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <InputField variant="outlined" margin="normal" fullWidth label="E-mail" name="email" />
          <InputField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Phone number"
            name="phoneNumber"
          />
          <PasswordField field={passwordField} issues={passwordIssues} />
          <ReferralCodeField />
          <CheckboxField
            name="isAccepted"
            label={
              <Typography
                color={(theme) => theme.palette.text.secondary}
                component="div"
                fontSize={13}
              >
                I accept the <Link href="">Therms of Use</Link> and have read{' '}
                <Link href="">Privacy Policy</Link>
              </Typography>
            }
          />
          <Button
            disabled={!isDirty || !(!passwordIssues.length && !Object.keys(errors).length)}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </FormProvider>
    </Box>
  );
};
