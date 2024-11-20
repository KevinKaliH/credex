import { ValidateSessionResponse } from "@/models/response/validateSessionResponse.model";

export class AuthSessionUtil {
  static saveSession(user: ValidateSessionResponse) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  static getAuthSession(): null | ValidateSessionResponse {
    const data = sessionStorage.getItem("user");
    if (!data) return null;
    return JSON.parse(data);
  }

  static clearSession() {
    sessionStorage.clear();
  }
}
