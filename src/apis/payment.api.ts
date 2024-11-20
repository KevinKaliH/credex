import { PayRequestAirkpak } from "@/models/request/PayRequestAirkpak";
import { BaseResponsePayAirkpak } from "@/models/response/BaseResponsePayAirkpak";
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
      valor: formData.targetNumber.replace(/\s+/g, ""),
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
      Authorization: `Bearer ${sessionData.token}`,
      "Content-Type": "application/json",
    },
  });

  if (response.status == 401) throw new Error("UNAUTHORIZED");
  if (response.status == 500) throw new Error("SERVER_ERROR");

  return await response.json();
}

async function ConfirmPayment(
  formData: PaymentFormModel,
  barCode: string
): Promise<BaseResponsePayAirkpak> {
  const sessionData = AuthSessionUtil.getAuthSession();
  if (sessionData == null) throw new Error("UNAUTHORIZED");

  const currencyCodes = window.__env__[formData.currencyId!];

  const body: PayRequestAirkpak = {
    esPorLotes: false,
    moneda: formData.currencyId!,
    tasaCambio: 1,
    terminalID: String(sessionData.sesionUsuario.terminalID),
    requestLog: {
      terminalID: String(sessionData.sesionUsuario.terminalID),
      agenciaID: String(sessionData.sesionUsuario.agenciaID),
      grupoID: String(sessionData.sesionUsuario.grupoID),
      paisID: String(sessionData.sesionUsuario.paisID),
      servicePointID: String(sessionData.sesionUsuario.servicePointId),
      subAgentID: String(sessionData.sesionUsuario.subAgentID),
      userID: String(sessionData.sesionUsuario.id),
      regionID: String(sessionData.sesionUsuario.regionID),
    },
    pagos: [
      {
        codigoServicio: Number(currencyCodes.COD_SER),
        idpuntoservicio: String(sessionData.sesionUsuario.servicePointId),
        idregion: sessionData.sesionUsuario.regionID,
        idregionorigen: sessionData.sesionUsuario.regionID,
        idsubagente: sessionData.sesionUsuario.subAgentID,
        operador: sessionData.sesionUsuario.id,
        idReferenciaConsulta: "",
        codigoServicioReferencia: currencyCodes.COD_SER_REF,
        esRegional: false,
        montototal: String(formData.valuePay),
        metodopago: "1",
        cargoFijo: 0,
        barcode: [
          {
            nombre: "CodigoBarra",
            valor: barCode,
          },
        ],
      },
    ],
  };

  const url =
    window.__env__.VITE_API_AIRPAK + EnumUrlCatalogsPaths.airpakPayment;

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${sessionData.token}`,
      "Content-Type": "application/json",
    },
  });

  if (response.status == 401) throw new Error("UNAUTHORIZED");
  if (response.status == 500) throw new Error("SERVER_ERROR");

  return await response.json();
}

const PaymentApi = {
  searchClient,
  ConfirmPayment,
};

export default PaymentApi;
