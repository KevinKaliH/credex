import { Navigate } from "react-router-dom";
import { AuthSessionUtil } from "../utils/authSession.util";
import { EnumAppRoutes } from "../utils/urlPaths.utl";

const ProtectedRoute = ({ children }: any) => {
  const session = AuthSessionUtil.getAuthSession();
  if (!session) {
    AuthSessionUtil.clearSession();
    return <Navigate to={EnumAppRoutes.unauthorized} replace />;
  }

  return children;
};

export default ProtectedRoute;
