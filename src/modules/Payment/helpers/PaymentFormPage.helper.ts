import {
  InitialFormModal,
  PaymentFormModel,
} from "@payment/utils/paymentForm.model";
import { useMemo, useState } from "react";
import { FormikHelpers, FormikProps } from "formik";
import { formSchema } from "@payment/utils/form.schema";
import paymentApi from "@/apis/payment.api";

interface IPaymentFormState {
  existQuery: boolean;
  visibleAlert: boolean;
  submitButtonId: string;
  visibleConfirmModal: boolean;
}

const initialStatePage: IPaymentFormState = {
  existQuery: false,
  submitButtonId: "",
  visibleAlert: false,
  visibleConfirmModal: false,
};

const PaymentFormPageHelper = () => {
  const [statePage, setPageState] =
    useState<IPaymentFormState>(initialStatePage);

  const validationSchema = useMemo(
    () => formSchema(statePage.existQuery),
    [statePage.existQuery]
  );

  const onSubmit = async (
    values: PaymentFormModel,
    _: FormikHelpers<PaymentFormModel>
  ) => {
    if (statePage.submitButtonId == "search") {
      await paymentApi.searchClient(values);

      setPageState({ ...statePage, visibleAlert: true, existQuery: true });
    } else if (statePage.submitButtonId == "confirm") {
      console.log("this is the final step");
    }
  };

  const onClickSearch = (formik: FormikProps<PaymentFormModel>) => {
    setPageState({ ...statePage, submitButtonId: "search" });
    formik.submitForm();
  };

  const onClickDisplayModal = (formik: FormikProps<PaymentFormModel>) => {
    formik.validateForm();
    if (!formik.isValid || !statePage.existQuery) return;

    setPageState({ ...statePage, visibleConfirmModal: true });
  };

  const onClickCancelPayment = () => {
    console.log("cancel form");
  };

  const onClickHideModal = () =>
    setPageState({ ...statePage, visibleConfirmModal: false });

  const onClickAcceptModal = () =>
    setPageState({ ...statePage, visibleConfirmModal: false });

  const onClickConfimPayment = (formik: FormikProps<PaymentFormModel>) => {
    setPageState({ ...statePage, submitButtonId: "confirm" });
    formik.submitForm();
  };

  const closeAlert = () => {
    setPageState({ ...statePage, visibleAlert: false });
  };

  return {
    onSubmit,
    statePage,
    closeAlert,
    onClickSearch,
    validationSchema,
    InitialFormModal,
    onClickHideModal,
    onClickAcceptModal,
    onClickDisplayModal,
    onClickConfimPayment,
    onClickCancelPayment,
  };
};

export default PaymentFormPageHelper;
