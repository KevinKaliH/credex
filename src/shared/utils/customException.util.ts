export class CustomException extends Error {
  type: TypeException;

  constructor(msg: string, type?: TypeException) {
    super(msg);
    this.type = type ?? "SERVER_ERROR";
  }
}

export type TypeException =
  | "NOTFOUND"
  | "UNAUTHORIZED"
  | "SERVER_ERROR"
  | "DEVELOP"
  | "BAD_REQUEST";
