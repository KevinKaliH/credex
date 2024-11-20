import { RouteParamPaymentBillModel } from "@/models/core/routeParamsPaymentBill.model";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentBillHelper = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const locationRoute = useLocation();
  const routeParams = locationRoute.state as RouteParamPaymentBillModel;

  const voucherPdfUrl = routeParams
    ? `data:application/pdf;base64,${routeParams.ticketpagoPDF}`
    : "";

  useEffect(() => {
    if (routeParams) {
      console.log("voucherPdfUrl", voucherPdfUrl);
    }
  }, []);

  const showModal = () => {
    setIsVisibleModal(true);
  };

  const hideModal = () => {
    setIsVisibleModal(false);
  };

  return {
    isVisibleModal,
    voucherPdfUrl,
    routeParams,
    hideModal,
    showModal,
  };
};

export default PaymentBillHelper;
