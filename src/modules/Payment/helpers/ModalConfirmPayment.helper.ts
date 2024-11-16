import usePayment from "@payment/context/payment.context";

const ModalConfirmPaymentHelper = () => {
  const visibleConfirmModal = usePayment((s) => s.visibleConfirmModal);
  const setVisibleConfirmModal = usePayment((s) => s.setVisibleConfirmModal);

  const onClickHideModal = () => {
    setVisibleConfirmModal(false);
  };

  const onClickAcceptModal = () => {
    console.log("this is right");
  };

  return {
    onClickHideModal,
    onClickAcceptModal,
    visibleConfirmModal,
  };
};

export default ModalConfirmPaymentHelper;
