import { ISelectValue } from "./common.model";

export interface SearchResponseVM {
  recordExist: boolean;
  message: string;
  barCode: string;
  success: boolean;
  client?: string;
}

export const InitialSearchResponse: SearchResponseVM = {
  barCode: "",
  recordExist: false,
  message: "",
  success: false,
  client: "",
};
Object.freeze(InitialSearchResponse);

export interface PaymentLoadData {
  currencyList: ISelectValue[];
  typeDocumentList: ISelectValue[];
}
