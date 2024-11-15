export interface PaymentFormModel {
  targetNumber: string;
  docTypeId: number | undefined;
  documentValue: string;
  firstName: string;
  lastName: string;
  currencyId: number | undefined;
}

export const InitialFormModal: PaymentFormModel = {
  targetNumber: "",
  docTypeId: undefined,
  documentValue: "",
  firstName: "",
  lastName: "",
  currencyId: undefined,
};
