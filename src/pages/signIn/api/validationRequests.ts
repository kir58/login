import { delay } from '../../../shared/lib';

const validReferralCodes = ['goaaaaal', 'bugor', 'bobr', 'bob'];

export const fetchIsValidReferralCode = async (referralCode: string) => {
  await delay(400);
  return Promise.resolve({ isValid: validReferralCodes.includes(referralCode) });
};
