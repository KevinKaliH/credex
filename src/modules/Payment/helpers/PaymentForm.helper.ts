import { useFormikContext } from "formik";
import { PaymentFormModel } from "@payment/utils/paymentForm.model";
import { SelectChangeEvent } from "@mui/material/Select";
import { useMemo } from "react";
import { CurrencyList, TypeDocumentList } from "@payment/utils/const";

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

  const maskDocument = useMemo(
    () => TypeDocumentList.find((i) => i.value == form.values.docTypeId)?.mask,
    [form.values.docTypeId]
  );

  return {
    form,
    maskDocument,
    currencyPrefix,
    onChangeDocTypeId,
  };
};

export default PaymentFormHelper;
