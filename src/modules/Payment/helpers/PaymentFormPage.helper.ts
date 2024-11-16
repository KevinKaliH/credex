import {
  InitialFormModal,
  PaymentFormModel,
} from "@payment/utils/paymentForm.model";
import { useMemo } from "react";
import { formSchema } from "@payment/utils/form.schema";
import paymentApi from "@/apis/payment.api";
import usePayment from "@payment/context/payment.context";

const PaymentFormPageHelper = () => {
  const existClient = usePayment((state) => state.existClient);

  const validationSchema = useMemo(
    () => formSchema(existClient),
    [existClient]
  );

  const onSubmit = async (values: PaymentFormModel) => {
    await paymentApi.searchClient(values);
  };

  return {
    onSubmit,
    validationSchema,
    InitialFormModal,
  };
};

export default PaymentFormPageHelper;
