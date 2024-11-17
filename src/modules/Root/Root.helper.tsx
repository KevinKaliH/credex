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
    setIsLogged(true);
    setIsLogging(true);

    const a = searchParams.get("a");
    const b = searchParams.get("b");

    validations(a, b)
      .then((resp) => {
        console.log(resp);
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

async function validations(a: string | null, b: string | null) {
  if (!a || !b) {
    return false;
  }
}
