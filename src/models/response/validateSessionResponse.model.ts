export interface ValidateSessionResponse {
  datetimeConfig: string;
  remoteIP: string;
  remoteHOST: string;
  remoteUSER: string;
  remoteMACAddress: string;
  browserType: string;
  browserName: string;
  browserPlataform: string;
  conectorID: string;
  terminalID: string;
  dollaAccount: string;
  localAccount: string;
  messageError: string;
  redireccionar: string;
  strCodeCripted: string;
  strUserCripted: string;
  datosToken: DatosToken;
  sesionVersion: string;
  servicePoint: string;
  sesionUsuario: SesionUsuario;
  ipAddress: string;
  hostName: string;
  macAddress: string;
  status: string;
  token: string;
  statusApi: StatusApi;
}

export interface DatosToken {
  service_point_: string;
  id_user_: string;
  idsession_decript_: string;
  os_: string;
  browser_: string;
  ip_: string;
  session_token_: string;
  cookie_: string;
}

export interface SesionUsuario {
  id: string;
  nombreCompleto: string;
  servicePointId: number;
  agenciaID: number;
  subAgentID: number;
  grupoID: number;
  regionID: number;
  paisID: number;
  tracsOperator: string;
  h2HOperator: string;
  h2HPassword: string;
  connectorID: string;
  terminalID: string;
  agencyLocalAccount: string;
  agencyDolarAccount: string;
  roles: any;
  ccUser: string;
  ccServicePoint: string;
  modalidad: string;
  ccSessionID: string;
  ccConnectorID: string;
  ccTerminalID: string;
  email: string;
  isoCountry: string;
  userDocumentID: string;
  rol: string;
  rolName: string;
}

export interface StatusApi {
  statusCodigo: number;
  statusMensaje: string;
  statusTransaccion: string;
  statusType: string;
}
