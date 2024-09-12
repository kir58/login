import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Close, Check } from '@mui/icons-material';
import { Theme } from '@mui/material';

export type Variant = 'danger' | 'grey' | 'success';

type ErrorTextProps = React.PropsWithChildren<{
  variant: Variant;
}>;

const getColor = (variant: Variant, theme: Theme) => {
  if (variant === 'danger') {
    return theme.palette.error.main;
  }
  if (variant === 'grey') {
    return theme.palette.text.secondary;
  }

  return theme.palette.success.main;
};
export const ErrorText = ({ children, variant }: ErrorTextProps) => {
  const Icon = variant === 'danger' ? Close : Check;

  return (
    <Typography component="div" color={(theme) => getColor(variant, theme)} fontSize={13}>
      <Box display="flex" gap={1} alignItems="center">
        <Icon />
        {children}
      </Box>
    </Typography>
  );
};
