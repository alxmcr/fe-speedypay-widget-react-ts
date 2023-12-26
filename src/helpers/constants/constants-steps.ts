import { ResultStep } from '../../types/appTypes';

export const BANK_TRANSFER_ONE_STEP: ResultStep = {
  id: 'bank-transfer-1',
  code: '1',
  name: 'Enter to your bank digital.',
};
export const BANK_TRANSFER_TWO_STEP: ResultStep = {
  id: 'bank-transfer-2',
  code: '2',
  name: 'Copy CLABE shared.',
};
export const BANK_TRANSFER_THREE_STEP: ResultStep = {
  id: 'bank-transfer-3',
  code: '3',
  name: 'Transfer from your bank digital using the CLABE for complete your shopping.',
};

export const CASH_ONE_STEP: ResultStep = {
  id: 'cash-1',
  code: '1',
  name: 'Visit some nearest Cash store.',
};
export const CASH_TWO_STEP: ResultStep = {
  id: 'cash-2',
  code: '2',
  name: 'Mention that you want to make a cash payment.',
};
export const CASH_THREE_STEP: ResultStep = {
  id: 'cash-3',
  code: '3',
  name: 'Use payment reference number generated for complete your shopping.',
};

export const BANK_TRANSFER_STEPS = [
  BANK_TRANSFER_ONE_STEP,
  BANK_TRANSFER_TWO_STEP,
  BANK_TRANSFER_THREE_STEP,
];

export const CASH_STEPS = [CASH_ONE_STEP, CASH_TWO_STEP, CASH_THREE_STEP];
