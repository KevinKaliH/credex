export interface ISelectValue {
  label: string;
  value: number;
  mask?: string;
  data?: any;
}

export const TypeDocumentList: ISelectValue[] = [
  {
    value: 1,
    label: "Cédula de identidad",
    mask: "###-######-####L",
    data: {
      regex: /^\d{3}-\d{6}-\d{4}[A-Za-z]$/,
      errorMessage: "Ejemplo valor: 001-000000-0000A",
    },
  },
];

export const CurrencyList: ISelectValue[] = [
  {
    value: 1,
    label: "Cordoba",
    data: { prefix: "NIO" },
  },
  {
    value: 2,
    label: "Dolar",
    data: { prefix: "USD" },
  },
];

export const NUMBER_TARGET_SHOW_CHARS = 4;

export const FORM_LABELS: { [key: string]: string } = {
  targetNumber: "Número de tarjeta",
  docTypeId: "Tipo de documento",
  documentValue: "Número de documento",
  firstName: "Primer nombre",
  lastName: "Primer apellido",
  currencyId: "Tipo de moneda",
  valuePay: "Monto a pagar",
};
