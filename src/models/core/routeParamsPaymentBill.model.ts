import { Pago } from "@/models/response/BaseResponsePayAirkpak";

export interface RouteParamPaymentBillModel extends Pago {
  amount: number;
}
