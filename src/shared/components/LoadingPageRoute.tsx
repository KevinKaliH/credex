import { Suspense, useEffect } from "react";
import useLoadingSpinner from "../context/loadingSpinner.context";
import ProtectedRoute from "./ProtectedRoute";

const LoadingPageRoute = ({ children }: any) => (
  <Suspense fallback={<TempDisplayLoaderPage />}>
    <ProtectedRoute>{children}</ProtectedRoute>
  </Suspense>
);

export default LoadingPageRoute;

const TempDisplayLoaderPage = () => {
  const setVisibleLoading = useLoadingSpinner((s) => s.setVisibleLoading);
  useEffect(() => {
    setVisibleLoading(true);
    return () => {
      setVisibleLoading(false);
    };
  }, []);
  return <></>;
};
