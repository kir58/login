export type ValidationSchemaType = {
  email: string;
  password: string;
  phoneNumber: string;
  referralCode: string;
  isAccepted: boolean;
};
export enum ErrorType {
  CantContentEmail = 'CantContentEmail',
  AtLeast8Characters = 'AtLeast8Characters',
  ContainsNumberOrSymbol = 'ContainsNumberOrSymbol',
  OneMoreCapitalizeLetter = 'OneMoreCapitalizeLetter',
}
