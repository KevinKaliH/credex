export interface BaseBadQueryResponseModel {
  codError: number;
  detalleError: string;
  mensajeUsuario: string;
  severidad: number;
}

export interface BaseSuccessQueryResponseModel {
  resultado: Resultado[];
  encabezado: Encabezado;
  error: Error;
  idTasaCambio: number;
  tasaCambio: number;
}

export interface Resultado {
  codigoBarra: CodigoBarra[];
  codigoServicioReferencia: string;
  descripcionFactura: DescripcionFactura[];
  descripcionFacturaPE: any;
  estado: string;
  typePE: any;
  importe: number;
  importeML: number;
  importeUSD: number;
  nombreCliente: string;
  numeroOrden: number;
  priorGrupo: string;
  priorNumero: string;
  idTasaMC: number;
  tasaMC: number;
  tipoImporte: string;
  idCargoServicio: number;
  cargoServicio: number;
}

export interface CodigoBarra {
  nombre: string;
  valor: string;
}

export interface DescripcionFactura {
  nombre: string;
  valor: string;
}

export interface Encabezado {
  numeroAutorizacion: string;
}

export interface Error {
  codError: number;
  detalleError: string;
  mensajeUsuario: string;
  severidad: any;
}

export interface BaseValueResponseModel {
  IsProcessOk: boolean;
  UserMessage: any;
  UserMessageDetail: any;
  ErrorTracker: {
    CodeError: number;
    ErrorList: [];
  };
  Response: {
    SchemaName: string;
    Response: any;
  };
}
