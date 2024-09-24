import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputField } from '../../../../shared/ui';

export const PasswordField = () => {
  const [isShowPassword, setShowPassword] = useState(false);

  return (
    <InputField
      variant="outlined"
      margin="normal"
      fullWidth
      label="Password"
      name="password"
      type={isShowPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword((old) => !old)}>
              {isShowPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
