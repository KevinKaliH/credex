import { useFormikContext } from "formik";
import { PaymentFormModel } from "../utils/paymentForm.model";
import { SelectChangeEvent } from "@mui/material/Select";

const PaymentFormHelper = () => {
  const form = useFormikContext<PaymentFormModel>();

  const onChangeDocTypeId = (e: SelectChangeEvent<number>) => {
    form.handleChange(e);
    form.setFieldValue("documentValue", "");
  };

  return {
    form,
    onChangeDocTypeId,
  };
};

export default PaymentFormHelper;
