import usePayment from "@payment/context/payment.context";
import { useFormikContext } from "formik";

const ModalConfirmPaymentHelper = () => {
  const formik = useFormikContext();
  const visibleConfirmModal = usePayment((s) => s.visibleConfirmModal);
  const setVisibleConfirmModal = usePayment((s) => s.setVisibleConfirmModal);

  const onClickHideModal = () => {
    setVisibleConfirmModal(false);
  };

  const onClickAcceptModal = () => {
    setVisibleConfirmModal(false);
    formik.submitForm();
  };

  return {
    onClickHideModal,
    onClickAcceptModal,
    visibleConfirmModal,
  };
};

export default ModalConfirmPaymentHelper;
