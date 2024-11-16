import * as yup from "yup";
import { InitialFormModal } from "../utils/paymentForm.model";
import { useState } from "react";

const validationSchema = yup.object({
  targetNumber: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Only numbers are allowed"),
  currencyId: yup.number().required(),

  docTypeId: yup.number().required(),
  documentValue: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const PaymentFormPageHelper = () => {
  const [visibleAlert, setVisibleAlert] = useState(false);

  const onSubmit = async (values: any) => {
    console.log("working");

    const resp = await tempPost(values);
    console.log(resp);
    setVisibleAlert(true);
  };

  return {
    onSubmit,
    validationSchema,
    InitialFormModal,
    visibleAlert,
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
