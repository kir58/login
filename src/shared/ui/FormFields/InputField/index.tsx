import { debounce, LinearProgress, TextField, TextFieldProps } from '@mui/material';
import { FC, useCallback, memo } from 'react';
import { useFormContext, useController } from 'react-hook-form';

type IFormInputProps = {
  name: string;
  onSetValueDebounce?: (value: string) => void;
  isLoading?: boolean;
} & TextFieldProps;

const InputField: FC<IFormInputProps> = memo(
  ({ name, isLoading, onSetValueDebounce, ...otherProps }) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    const { field } = useController({ control, name });
    const error = errors[name];

    const handleTyping = useCallback(
      debounce((value) => {
        if (onSetValueDebounce) onSetValueDebounce(value);
      }, 300),
      [],
    );

    const getHelperText = () => {
      if (isLoading) {
        return <LinearProgress />;
      }

      return <>{errors[name]?.message}</>;
    };

    return (
      <TextField
        {...otherProps}
        onChange={(e) => {
          field.onChange(e);
          handleTyping(e.target.value);
        }}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
        inputRef={field.ref}
        error={!!error}
        helperText={getHelperText()}
      />
    );
  },
);

export { InputField };
