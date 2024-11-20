import AuthService from "@/services/auth.service";
import { setLoadingGlobal } from "@/shared/context/loadingSpinner.context";
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

    AuthService.validations(a, b)
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
