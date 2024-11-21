import { useFormikContext } from "formik";
import { PaymentFormModel } from "@payment/utils/paymentForm.model";
import { SelectChangeEvent } from "@mui/material/Select";
import { useMemo } from "react";
import usePayment from "@payment/context/payment.context";
import { useLoaderData } from "react-router-dom";
import { PaymentLoadData } from "@/models/core/PaymentView.model";

const PaymentFormHelper = () => {
  const form = useFormikContext<PaymentFormModel>();
  const {
    isSearching,
    searchResult,
    setBtnClicked,
    visibleAlert,
    existClient,
  } = usePayment();
  const { currencyList, typeDocumentList } = useLoaderData() as PaymentLoadData;

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
      currencyList.find((i) => i.value == form.values.currencyId)?.data.prefix,
    [form.values.currencyId]
  );

  const maskDocument = useMemo(
    () => typeDocumentList.find((i) => i.value == form.values.docTypeId)?.mask,
    [form.values.docTypeId]
  );

  return {
    form,
    existClient,
    isSearching,
    searchResult,
    visibleAlert,
    maskDocument,
    currencyList,
    currencyPrefix,
    typeDocumentList,
    onChangeDocTypeId,
    onClickSearchLocal,
  };
};

export default PaymentFormHelper;
