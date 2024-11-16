import {
  InitialFormModal,
  PaymentFormModel,
} from "@payment/utils/paymentForm.model";
import { useMemo, useState } from "react";
import { FormikHelpers } from "formik";
import { formSchema } from "@payment/utils/form.schema";

const PaymentFormPageHelper = () => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [existQuery, setExistQuery] = useState(false);

  const validationSchema = useMemo(() => formSchema(existQuery), [existQuery]);

  const onSubmit = async (
    values: PaymentFormModel,
    _: FormikHelpers<PaymentFormModel>
  ) => {
    await tempPost(values);
    setVisibleAlert(true);
    setExistQuery(true);
  };

  const closeAlert = () => {
    setVisibleAlert(false);
  };

  return {
    onSubmit,
    closeAlert,
    existQuery,
    visibleAlert,
    validationSchema,
    InitialFormModal,
  };
};

export default PaymentFormPageHelper;

function tempPost(_: any) {
  return new Promise((res: any, _: any) => {
    setTimeout(() => {
      res({ ok: true });
    }, 600);
  });
}
