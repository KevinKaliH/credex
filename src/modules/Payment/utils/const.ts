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

export const NUMBER_TARGET_HIDE_CHARS = 4
