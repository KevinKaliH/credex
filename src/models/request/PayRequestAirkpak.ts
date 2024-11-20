export interface PayRequestAirkpak {
  pagos: Pago[];
  esPorLotes: boolean;
  moneda: string;
  tasaCambio: number;
  terminalID: string;
  requestLog: RequestLog;
}

export interface Pago {
  codigoServicio: number;
  idpuntoservicio: string;
  idregion: number;
  idregionorigen: number;
  idsubagente: number;
  operador: string;
  idReferenciaConsulta: string;
  codigoServicioReferencia: string;
  esRegional: boolean;
  montototal: string;
  metodopago: string;
  cargoFijo: number;
  barcode: Barcode[];
}

export interface RequestLog {
  agenciaID: string;
  grupoID: string;
  paisID: string;
  regionID: string;
  servicePointID: string;
  subAgentID: string;
  terminalID: string;
  userID: string;
}

export interface Barcode {
  nombre: string;
  valor: string;
}
