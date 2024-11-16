import * as yup from "yup";
import { InitialFormModal } from "../utils/paymentForm.model";
import { useState } from "react";

const validationSchema = yup.object({
  targetNumber: yup
    .string()
    .required()
    .test(
      "no-spaces",
      "Credit card number must not contain spaces",
      (value) => {
        return !value || !/\s/.test(value);
      }
    )
    .transform((value) => value.replace(/\s+/g, ""))
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .min(13)
    .max(19),
  currencyId: yup.number().required(),

  docTypeId: yup.number().required(),
  documentValue: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const PaymentFormPageHelper = () => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [existQuery, setExistQuery] = useState(false);

  const onSubmit = async (values: any) => {
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

function tempPost(values: any) {
  console.log(values);

  return new Promise((res: any, _: any) => {
    setTimeout(() => {
      res({ ok: true });
    }, 600);
  });
}
