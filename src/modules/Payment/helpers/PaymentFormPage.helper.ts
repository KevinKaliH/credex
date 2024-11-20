import {
  InitialFormModal,
  PaymentFormModel,
} from "@payment/utils/paymentForm.model";
import { useMemo } from "react";
import { formSchema } from "@payment/utils/form.schema";
import PaymentApi from "@/apis/payment.api";
import usePayment from "@payment/context/payment.context";
import { useNavigate } from "react-router-dom";
import useLoadingSpinner from "@/shared/context/loadingSpinner.context";
import { EnumAppRoutes } from "@/shared/utils/urlPaths.utl";
import PaymentService from "@/services/payment.service";
import { ErrorType } from "@/shared/utils/errorType.util";
import { RouteParamPaymentBillModel } from "@/models/core/routeParamsPaymentBill.model";

const PaymentFormPageHelper = () => {
  const navigate = useNavigate();

  const setVisibleLoading = useLoadingSpinner((s) => s.setVisibleLoading);

  const {
    resetState,
    btnClicked,
    existClient,
    setSearching,
    searchResult,
    setExistClient,
    setVisibleAlert,
    setSearchResponse,
    setVisibleConfirmModal,
  } = usePayment();

  const validationSchema = useMemo(
    () => formSchema(existClient),
    [existClient]
  );

  const onSubmit = async (values: PaymentFormModel) => {
    if (btnClicked === "search") await searchEvent(values);
    else if (btnClicked == "showModalConfirm") setVisibleConfirmModal(true);
    else {
      await confirmPayment(values);
    }
  };

  const searchEvent = async (values: PaymentFormModel) => {
    setVisibleLoading(true);
    setSearching(true);

    try {
      const response = await PaymentService.search(values);

      setSearchResponse(response);
      setVisibleAlert(true);
      setExistClient(response.recordExist);
    } catch (err: any) {
      console.log(err);

      if (err?.message == ErrorType.UNAUTHORIZED) {
        navigate(EnumAppRoutes.unauthorized, { replace: true });
        return;
      }
    } finally {
      setSearching(false);
      setVisibleLoading(false);
    }
  };

  const confirmPayment = async (values: PaymentFormModel) => {
    setVisibleLoading(true);
    setVisibleConfirmModal(false);

    try {
      const response = await PaymentApi.ConfirmPayment(
        values,
        searchResult.barCode
      );
      if (!response) return;

      const first = response.pagos.shift()!;
      const stateObject: RouteParamPaymentBillModel = {
        ...first,
        amount: Number(values.valuePay),
      };

      navigate(EnumAppRoutes.bill, {
        replace: true,
        state: stateObject,
        preventScrollReset: false,
      });
      resetState();
    } catch (err: any) {
      console.log(err);

      if (err?.message == ErrorType.UNAUTHORIZED) {
        navigate(EnumAppRoutes.unauthorized, { replace: true });
        return;
      }
    } finally {
      setVisibleLoading(false);
    }
  };

  return {
    onSubmit,
    validationSchema,
    InitialFormModal,
  };
};

export default PaymentFormPageHelper;
