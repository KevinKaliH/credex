import { useFormikContext } from "formik";
import { PaymentFormModel } from "@payment/utils/paymentForm.model";
import { SelectChangeEvent } from "@mui/material/Select";
import { useMemo } from "react";
import { CurrencyList, TypeDocumentList } from "@payment/utils/const";
import usePayment from "@payment/context/payment.context";

const PaymentFormHelper = () => {
  const form = useFormikContext<PaymentFormModel>();
  const existClient = usePayment((s) => s.existClient);
  const visibleAlert = usePayment((s) => s.visibleAlert);
  const isSearching = usePayment((s) => s.isSearching);
  const setBtnClicked = usePayment((s) => s.setBtnClicked);

  const onClickSearchLocal = () => {
    setBtnClicked("search");
    form.submitForm();
  };

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
    existClient,
    isSearching,
    visibleAlert,
    maskDocument,
    currencyPrefix,
    onChangeDocTypeId,
    onClickSearchLocal,
  };
};

export default PaymentFormHelper;
