import {
  InitialFormModal,
  PaymentFormModel,
} from "@payment/utils/paymentForm.model";
import { useMemo } from "react";
import { formSchema } from "@payment/utils/form.schema";
import PaymentApi from "@/apis/payment.api";
import usePayment from "@payment/context/payment.context";
import { useNavigate } from "react-router-dom";
import useLoadingSpinner from "@/shared/context/loadingSpinner.context";
import { EnumAppRoutes } from "@/shared/utils/urlPaths.utl";

const PaymentFormPageHelper = () => {
  const navigate = useNavigate();

  const setVisibleLoading = useLoadingSpinner((s) => s.setVisibleLoading);

  const resetState = usePayment((s) => s.resetState);
  const setSearching = usePayment((s) => s.setSearching);
  const setExistClient = usePayment((s) => s.setExistClient);
  const btnClicked = usePayment((state) => state.btnClicked);
  const existClient = usePayment((state) => state.existClient);
  const setVisibleAlert = usePayment((s) => s.setVisibleAlert);
  const setVisibleConfirmModal = usePayment((s) => s.setVisibleConfirmModal);

  const validationSchema = useMemo(
    () => formSchema(existClient),
    [existClient]
  );

  const onSubmit = async (values: PaymentFormModel) => {
    if (btnClicked === "search") await searchEvent(values);
    else if (btnClicked == "showModalConfirm") setVisibleConfirmModal(true);
    else {
      await confirmPayment(values);
    }
  };

  const searchEvent = async (values: PaymentFormModel) => {
    setVisibleLoading(true);
    setSearching(true);
    await PaymentApi.searchClient(values);

    setVisibleAlert(true);
    setExistClient(true);
    setSearching(false);
    setVisibleLoading(false);
  };

  const confirmPayment = async (values: PaymentFormModel) => {
    setVisibleLoading(true);

    await PaymentApi.ConfirmPayment(values);
    setVisibleConfirmModal(false);
    setVisibleLoading(false);
    resetState();
    navigate(EnumAppRoutes.bill, { replace: true });
  };

  return {
    onSubmit,
    validationSchema,
    InitialFormModal,
  };
};

export default PaymentFormPageHelper;
