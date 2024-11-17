import { AuthApi } from "@/apis/auth.api";
import { setLoadingGlobal } from "@/shared/context/loadingSpinner.context";
import { AuthSessionUtil } from "@/shared/utils/authSession.util";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const RootHelper = () => {
  const [isLogging, setIsLogging] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  const [searchParams] = useSearchParams();
  const loading = setLoadingGlobal();

  useEffect(() => {
    loading(true);
    setIsLogging(true);

    const a = searchParams.get("a");
    const b = searchParams.get("b");

    validations(a, b)
      .then((resp) => {
        setIsLogged(resp.ok);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLogging(false);
        loading(false);
      });
  }, []);

  return {
    isLogging,
    isLogged,
  };
};

export default RootHelper;

async function validations(
  a: string | null,
  b: string | null
): Promise<{ ok: boolean; msg?: string }> {
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
}
