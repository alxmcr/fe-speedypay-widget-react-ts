import { ResultStep } from '../../types/appTypes';

export const BANK_TRANSFER_ONE_STEP: ResultStep = {
  id: 'bank-transfer-1',
  code: '1',
  name: 'Ingresa a tu portal digital de tu banco.',
};
export const BANK_TRANSFER_TWO_STEP: ResultStep = {
  id: 'bank-transfer-2',
  code: '2',
  name: 'Copia la CLABE proporcionada.',
};
export const BANK_TRANSFER_THREE_STEP: ResultStep = {
  id: 'bank-transfer-3',
  code: '3',
  name: 'Transfiere desde tu banca en línea a esta CLABE Interbancaria para completar tu compra.',
};

export const CASH_ONE_STEP: ResultStep = {
  id: 'cash-1',
  code: '1',
  name: 'Visita el OXXO más cercano.',
};
export const CASH_TWO_STEP: ResultStep = {
  id: 'cash-2',
  code: '2',
  name: 'Menciona que realizarás un pago en efectivo con OXXO Pay.',
};
export const CASH_THREE_STEP: ResultStep = {
  id: 'cash-3',
  code: '3',
  name: 'Realiza tu pago usando la referencia antes de la fecha de expiración.',
};

export const BANK_TRANSFER_STEPS = [
  BANK_TRANSFER_ONE_STEP,
  BANK_TRANSFER_TWO_STEP,
  BANK_TRANSFER_THREE_STEP,
];

export const CASH_STEPS = [CASH_ONE_STEP, CASH_TWO_STEP, CASH_THREE_STEP];
