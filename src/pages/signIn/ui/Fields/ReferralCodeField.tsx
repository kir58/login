import { useState } from 'react';
import { fetchIsValidReferralCode } from '../../api/validationRequests.ts';
import { useFormContext } from 'react-hook-form';
import { ValidationSchemaType } from '../../model/types.ts';
import { InputField } from '../../../../shared/ui';

export const ReferralCodeField = () => {
  const [isChecking, setIsChecking] = useState(false);

  const { setError, clearErrors } = useFormContext<ValidationSchemaType>();

  const validateReferralCode = async (referralCode: string) => {
    setIsChecking(true);
    if (!referralCode) {
      clearErrors('referralCode');
      setIsChecking(false);
      return;
    }

    const { isValid } = await fetchIsValidReferralCode(referralCode);
    setIsChecking(false);
    clearErrors('referralCode');

    if (!isValid) {
      setError('referralCode', { type: 'Invalid input', message: 'There is no such promo code' });
    }
  };

  return (
    <InputField
      isLoading={isChecking}
      onSetValueDebounce={validateReferralCode}
      margin="normal"
      fullWidth
      label="Referral Code"
      name="referralCode"
    />
  );
};
