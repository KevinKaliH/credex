import { BaseSuccessQueryResponseModel } from "@/models/response/BaseSuccessQueryResponseModel";
import { AuthSessionUtil } from "@/shared/utils/authSession.util";
import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths.utl";
import { PaymentFormModel } from "@payment/utils/paymentForm.model";

async function searchClient(
  formData: PaymentFormModel
): Promise<BaseSuccessQueryResponseModel> {
  const sessionData = AuthSessionUtil.getAuthSession();
  if (sessionData == null) throw new Error("UNAUTHORIZED");

  const filtros = [
    {
      nombre: "Número de tarjeta",
      valor: formData.targetNumber,
    },
    {
      nombre: "Tipo de documento",
      valor: formData.docTypeId,
    },
    {
      nombre: "Número de documento (con guiones)",
      valor: formData.documentValue.toUpperCase(),
    },
    {
      nombre: "Primer nombre",
      valor: formData.firstName,
    },
    {
      nombre: "Primer apellido",
      valor: formData.lastName,
    },
  ];

  const currencyCodes = window.__env__[formData.currencyId!];

  const body = JSON.stringify({
    usuario: sessionData.sesionUsuario.id,
    codigoServicio: currencyCodes.COD_SER,
    codigoServicioReferencia: currencyCodes.COD_SER_REF,
    puntoServicio: sessionData.datosToken.service_point_,
    region: sessionData.sesionUsuario.regionID,
    subAgente: sessionData.sesionUsuario.subAgentID,
    type: "",
    filtros,
    fieldsPE: [],
  });

  const url =
    window?.__env__?.VITE_API_AIRPAK + EnumUrlCatalogsPaths.airpakQuery;

  const response = await fetch(url, {
    method: "POST",
    body,
    headers: {
      Authorization: sessionData.token,
      "Content-Type": "application/json",
    },
  });

  if (response.status == 401) throw new Error("UNAUTHORIZED");
  if (response.status == 500) throw new Error("SERVER_ERROR");

  return await response.json();
}

async function ConfirmPayment(_: PaymentFormModel) {
  return new Promise((res: any, _: any) => {
    setTimeout(() => {
      res({ ok: true });
    }, 600);
  });
}

const PaymentApi = {
  searchClient,
  ConfirmPayment,
};

export default PaymentApi;
