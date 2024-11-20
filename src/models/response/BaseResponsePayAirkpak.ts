export interface BaseResponsePayAirkpak {
  pagos: Pago[];
  shippingId: any;
  error: Error;
}

export interface Pago {
  autorizacion: string;
  servicio: string;
  correlativo: string;
  numeroautorizacion: string;
  ticketpago: string;
  ticketpagoPDF: string;
  ticketpagoHTML: string;
  urlimagen: string;
  movimientoTemporalID: string;
  tipoOperacion: number;
  error: Error;
}

export interface Error {
  codError: number;
  detalleError: any;
  mensajeUsuario: any;
  severidad: any;
}
