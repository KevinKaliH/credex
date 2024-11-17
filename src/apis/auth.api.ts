import { EnumUrlCatalogsPaths } from "@/shared/utils/urlPaths.utl";

export class AuthApi {
  static async queryValidateSession(a: string, b: string) {
    const domain = window?.__env__?.VITE_API_AIRPAK ?? "";
    const url = domain + EnumUrlCatalogsPaths.airpakValidateSession;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cookie: a,
        session_token: b,
      }),
    });

    return response;
  }
}
