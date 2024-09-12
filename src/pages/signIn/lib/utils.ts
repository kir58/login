import { Theme } from '@mui/material';

type ErrorStrength = 'strong' | 'middle' | 'weak';

export const getErrorStrength = (errorCount: number, countCheckVariants: number): ErrorStrength => {
  const validCount = countCheckVariants - errorCount;

  if (validCount === countCheckVariants) {
    return 'strong';
  }

  if ((validCount * 100) / countCheckVariants < 50) {
    return 'weak';
  }

  if (validCount < 100) {
    return 'middle';
  }

  return 'weak';
};

const strengthText: Record<ErrorStrength, string> = {
  strong: 'Strong Password',
  middle: 'Middle Password',
  weak: 'Weak Password',
};

export const getErrorStrengthText = (strength: ErrorStrength) => strengthText[strength];

export const getErrorStrengthColor = (strength: ErrorStrength, theme: Theme) => {
  if (strength === 'strong') {
    return theme.palette.success.main;
  }
  if (strength === 'weak') {
    return theme.palette.error.main;
  }

  return theme.palette.warning.main;
};
