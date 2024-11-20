import PaymentApi from "@/apis/payment.api";
import { SearchResponseVM } from "@/models/core/PaymentView.model";
import { PaymentFormModel } from "@payment/utils/paymentForm.model";

export default class PaymentService {
  static search = async (
    formData: PaymentFormModel
  ): Promise<SearchResponseVM> => {
    const response = await PaymentApi.searchClient(formData);
    
    if (response.error.codError != 0) {
      return {
        success: false,
        barCode: "",
        message: response.error.mensajeUsuario,
        recordExist: false,
      };
    }

    const firstResult = response.resultado.shift();
    const barCode = firstResult?.codigoBarra.shift()?.valor;
    const message = firstResult?.descripcionFactura.shift()?.valor;
    const client = firstResult?.nombreCliente;

    return {
      barCode: barCode ?? "",
      message: message ?? "",
      recordExist: true,
      success: true,
      client,
    };
  };
}
