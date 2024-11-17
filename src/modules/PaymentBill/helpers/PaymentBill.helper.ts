import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentBillHelper = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const { state: locationParams } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsVisibleModal(true);
    }, 2000);
  }, []);

  const showModal = () => {
    setIsVisibleModal(true);
  };

  const hideModal = () => {
    setIsVisibleModal(false);
  };

  return {
    locationParams,
    isVisibleModal,
    hideModal,
    showModal,
  };
};

export default PaymentBillHelper;
