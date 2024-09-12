import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import Button from '@mui/material/Button';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormContext, ControllerRenderProps } from 'react-hook-form';
import { TextField } from '@mui/material';
import { generatePassword } from '../../../../shared/lib';
import { ValidationSchemaType } from '../../model/types.ts';
import { ErrorsText } from '../ErrorsText.tsx';
import { getErrorStrength, getErrorStrengthColor, getErrorStrengthText } from '../../lib/utils.ts';
import { errorsText } from '../../lib/constants.ts';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ZodIssue } from 'zod';

type Props = {
  field: ControllerRenderProps<ValidationSchemaType, 'password'>;
  issues: ZodIssue[];
};

export const PasswordField = ({ field, issues }: Props) => {
  const [isShowPassword, setShowPassword] = useState(false);

  const {
    formState: { errors },
    setValue,
  } = useFormContext<ValidationSchemaType>();

  const error = errors.password;

  const handleGeneratePassword = () => {
    const generatedPassword = generatePassword();
    setValue('password', generatedPassword, { shouldValidate: true });
  };

  const passwordStrength = getErrorStrength(issues.length, errorsText.length);
  const passwordStrengthText = getErrorStrengthText(passwordStrength);

  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        type={isShowPassword ? 'text' : 'password'}
        label="Password"
        {...field}
        error={!!error}
        helperText={
          error ? (
            <>{error?.message}</>
          ) : (
            <Box display="flex" gap={1}>
              <Typography component="p" variant="subtitle2">
                Password strength:
              </Typography>
              {field.value && (
                <Typography
                  component="p"
                  variant="subtitle2"
                  color={(theme) => getErrorStrengthColor(passwordStrength, theme)}
                >
                  {passwordStrengthText}
                </Typography>
              )}
            </Box>
          )
        }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {!field.value && (
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={handleGeneratePassword}
                >
                  Generate
                </Button>
              )}
              {field.value && (
                <IconButton onClick={() => setShowPassword((old) => !old)}>
                  {isShowPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
      <ErrorsText value={field.value} issues={issues} />
    </>
  );
};
