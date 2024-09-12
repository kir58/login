import { ErrorType, ValidationSchemaType } from '../model/types.ts';

export const errorsText = [
  { text: `Can't  contain e-mail address`, key: ErrorType.CantContentEmail },
  { text: 'At least 8 characters', key: ErrorType.AtLeast8Characters },
  { text: 'Contains a number or(and) symbol', key: ErrorType.ContainsNumberOrSymbol },
  { text: 'One more capitalized letter', key: ErrorType.OneMoreCapitalizeLetter },
];

export const defaultValues: ValidationSchemaType = {
  email: '',
  password: '',
  referralCode: '',
  phoneNumber: '',
  isAccepted: false,
};
