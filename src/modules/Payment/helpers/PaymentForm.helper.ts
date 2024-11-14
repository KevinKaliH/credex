import { useFormik, useFormikContext } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  targetNumber: yup.string().required(),
});

const PaymentFormHelper = () => {
  const formik = useFormik({
    initialValues: {
      targetNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });

  return formik;
};

export default PaymentFormHelper;
