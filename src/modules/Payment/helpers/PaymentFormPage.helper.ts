import * as yup from "yup";
import { InitialFormModal } from "../utils/paymentForm.model";

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
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return {
    onSubmit,
    validationSchema,
    InitialFormModal,
  };
};

export default PaymentFormPageHelper;
