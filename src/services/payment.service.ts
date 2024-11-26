import PaymentApi from "@/apis/payment.api";
import { SearchResponseVM } from "@/models/core/PaymentView.model";
import { RouteParamPaymentBillModel } from "@/models/core/routeParamsPaymentBill.model";
import { PaymentFormModel } from "@payment/utils/paymentForm.model";

export default class PaymentService {
  static search = async (
    formData: PaymentFormModel
  ): Promise<SearchResponseVM> => {
    try {
      const response = await PaymentApi.searchClient(formData);

      const firstResult = response.resultado.shift();
      const barCode = firstResult?.codigoBarra.shift()?.valor;
      const message = firstResult?.descripcionFactura.shift()?.valor;
      const client = firstResult?.nombreCliente;

      return {
        barCode: barCode ?? "",
        message: message ?? "",
        recordExist: !!firstResult,
        success: true,
        client,
      };
    } catch (err: any) {
      console.log(err);

      if (err?.type == "NOTFOUND")
        return {
          success: false,
          barCode: "",
          message: err.message,
          recordExist: false,
        };

      throw err;
    }
  };

  static async cashControl(result: RouteParamPaymentBillModel) {
    let datos = {
      data: {
        idTransaccion: result.movimientoTemporalID,
        iframe: "ifremDrawerRuteador",
      },
      transaccion_parte1: [
        {
          label: "Servicio",
          value: result.servicio,
        },
      ],
      transaccion_parte2: [
        {
          label: "Total",
          value: result.amount,
        },
      ],
    };

    window.parent.postMessage(
      { message: "openEntradaEfectivoProducto", value: datos },
      "*"
    );
  }
}
