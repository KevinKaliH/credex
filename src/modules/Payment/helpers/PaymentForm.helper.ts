import { useFormikContext } from "formik";
import { PaymentFormModel } from "../utils/paymentForm.model";
import { SelectChangeEvent } from "@mui/material/Select";
import { useMemo } from "react";
import { CurrencyList } from "../utils/const";

const PaymentFormHelper = () => {
  const form = useFormikContext<PaymentFormModel>();

  const onChangeDocTypeId = (e: SelectChangeEvent<number>) => {
    form.handleChange(e);
    form.setFieldValue("documentValue", "");
  };

  const currencyPrefix = useMemo(
    () =>
      CurrencyList.find((i) => i.value == form.values.currencyId)?.data.prefix,
    [form.values.currencyId]
  );

  return {
    form,
    currencyPrefix,
    onChangeDocTypeId,
  };
};

export default PaymentFormHelper;
