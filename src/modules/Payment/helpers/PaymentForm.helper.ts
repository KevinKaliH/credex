import { useFormikContext } from "formik";
import { PaymentFormModel } from "@payment/utils/paymentForm.model";
import { SelectChangeEvent } from "@mui/material/Select";
import { useMemo } from "react";
import { CurrencyList, TypeDocumentList } from "@payment/utils/const";
import usePayment from "@payment/context/payment.context";
import PaymentApi from "@/apis/payment.api";
import { touchedErrorTags } from "@payment/utils/form.utils";

const PaymentFormHelper = () => {
  const form = useFormikContext<PaymentFormModel>();
  const existClient = usePayment((s) => s.existClient);
  const visibleAlert = usePayment((s) => s.visibleAlert);
  const isSearching = usePayment((s) => s.isSearching);
  const setSearching = usePayment((s) => s.setSearching);
  const setVisibleAlert = usePayment((s) => s.setVisibleAlert);
  const setExistClient = usePayment((s) => s.setExistClient);

  const onClickSearchLocal = () => {
    searchLogic();
  };

  const searchLogic = async () => {
    const tags = await form.validateForm();
    touchedErrorTags(tags, form.handleBlur);

    if (!form.isValid) return;
    setSearching(true);

    await PaymentApi.searchClient(form.values);

    setVisibleAlert(true);
    setExistClient(true);
    setSearching(false);
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
