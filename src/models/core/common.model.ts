export interface ILink {
  icon: string;
  label: string;
  link: string;
  fill: string;
}

export interface ISelectValue {
  label: string;
  value: string | number;
  mask?: string;
  data?: any;
}
