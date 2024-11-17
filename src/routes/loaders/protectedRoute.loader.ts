import { AuthSessionUtil } from "@/shared/utils/authSession.util";
import { EnumAppRoutes } from "@/shared/utils/urlPaths.utl";
import { redirect } from "react-router-dom";

export async function protectedRouteLoader() {
  try {
    const session = AuthSessionUtil.getAuthSession();
    if (!session) throw Error();
  } catch (err) {
    AuthSessionUtil.clearSession();
    return redirect(EnumAppRoutes.unauthorized);
  }

  return null;
}
