import {
  InitialFormModal,
  PaymentFormModel,
} from "@payment/utils/paymentForm.model";
import { useMemo } from "react";
import { formSchema } from "@payment/utils/form.schema";
import PaymentApi from "@/apis/payment.api";
import usePayment from "@payment/context/payment.context";

const PaymentFormPageHelper = () => {
  const existClient = usePayment((state) => state.existClient);
  const btnClicked = usePayment((state) => state.btnClicked);

  const setSearching = usePayment((s) => s.setSearching);
  const setVisibleAlert = usePayment((s) => s.setVisibleAlert);
  const setExistClient = usePayment((s) => s.setExistClient);
  const setVisibleConfirmModal = usePayment((s) => s.setVisibleConfirmModal);

  const validationSchema = useMemo(
    () => formSchema(existClient),
    [existClient]
  );

  const onSubmit = async (values: PaymentFormModel) => {
    if (btnClicked === "search") await searchEvent(values);
    else if (btnClicked == "showModalConfirm") setVisibleConfirmModal(true);
    else await confirmPayment(values);
  };

  const searchEvent = async (values: PaymentFormModel) => {
    setSearching(true);
    await PaymentApi.searchClient(values);

    setVisibleAlert(true);
    setExistClient(true);
    setSearching(false);
  };

  const confirmPayment = async (values: PaymentFormModel) => {
    await PaymentApi.ConfirmPayment(values);
  };

  return {
    onSubmit,
    validationSchema,
    InitialFormModal,
  };
};

export default PaymentFormPageHelper;
