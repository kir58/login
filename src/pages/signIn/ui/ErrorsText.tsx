import { ErrorText, Variant } from './ErrorText.tsx';

import { ZodIssue } from 'zod';
import { errorsText } from '../lib/constants.ts';

type Props = {
  value: string;
  issues: ZodIssue[];
};

const getVariant = (value: string, isNotValid: boolean): Variant => {
  if (!value) {
    return 'grey';
  }
  return isNotValid ? 'danger' : 'success';
};

export const ErrorsText = ({ value, issues }: Props) => {
  return errorsText.map(({ text, key }) => {
    const isNotValid = !!issues.find((issue) => issue.message === key);

    return (
      <ErrorText key={key} variant={getVariant(value, isNotValid)}>
        {text}
      </ErrorText>
    );
  });
};
