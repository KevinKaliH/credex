import usePayment from "@payment/context/payment.context";
import { useFormikContext } from "formik";

const ModalConfirmPaymentHelper = () => {
  const formik = useFormikContext();
  const visibleConfirmModal = usePayment((s) => s.visibleConfirmModal);
  const setVisibleConfirmModal = usePayment((s) => s.setVisibleConfirmModal);
  const setBtnClicked = usePayment((s) => s.setBtnClicked);

  const onClickHideModal = () => {
    setVisibleConfirmModal(false);
  };

  const onClickAcceptModal = () => {
    setBtnClicked('');
    formik.submitForm();
  };

  return {
    onClickHideModal,
    onClickAcceptModal,
    visibleConfirmModal,
  };
};

export default ModalConfirmPaymentHelper;
