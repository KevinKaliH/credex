import { Navigate } from "react-router-dom";
import { EnumAppRoutes } from "@/shared/utils/urlPaths.utl";
import RootHelper from "./Root.helper";

const RootPage = () => {
  const { isLogged, isLogging } = RootHelper();

  if (isLogging) return <></>;

  return (
    <Navigate
      to={isLogged ? EnumAppRoutes.search : EnumAppRoutes.unauthorized}
      replace
    />
  );
};

export default RootPage;
