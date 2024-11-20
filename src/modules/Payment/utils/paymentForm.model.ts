export interface PaymentFormModel {
  targetNumber: string;
  docTypeId: number | undefined;
  documentValue: string;
  firstName: string;
  lastName: string;
  currencyId: string | undefined;
  targetNumberMask?: string;
  valuePay?: number;
}

export const InitialFormModal: PaymentFormModel = {
  targetNumber: "",
  docTypeId: undefined,
  documentValue: "",
  firstName: "",
  lastName: "",
  currencyId: undefined,
  valuePay: undefined,
};
