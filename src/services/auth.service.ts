import { AuthApi } from "@/apis/auth.api";
import { AuthSessionUtil } from "@/shared/utils/authSession.util";

export default class AuthService {
  static validations = async (
    a: string | null,
    b: string | null
  ): Promise<{ ok: boolean; msg?: string }> => {
    if (!a || !b) return { ok: false };

    const queryResponse = await AuthApi.queryValidateSession(a, b);

    if (queryResponse.status != 200)
      return { ok: false, msg: "Error al obtener los datos del usuario" };

    const responseData = await queryResponse.json();

    if (responseData.statusApi.statusCodigo != 1001)
      return {
        ok: false,
        msg:
          "Error al obtener los datos del usuario. " +
          responseData.statusApi.statusMensaje,
      };

    // save in localstorage
    AuthSessionUtil.saveSession(responseData);
    return { ok: true };
  };
}
