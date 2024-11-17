import { Form, Formik, useFormikContext } from "formik";

import PaymentFormPageHelper from "@payment/helpers/PaymentFormPage.helper";
import ModalConfirmPayment from "@payment/components/ModalConfirmPayment";
import PaymentForm from "@payment/components/PaymentForm";
import FormInputsView from "@payment/components/FormInputsView";
import Button from "@mui/material/Button";
import usePayment from "@payment/context/payment.context";
import HeaderContainer from "@/shared/components/HeaderContainer";

const PaymentFormPage = () => {
  const { onSubmit, InitialFormModal, validationSchema } =
    PaymentFormPageHelper();

  return (
    <Formik
      validateOnMount={true}
      initialValues={InitialFormModal}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="paymentFormContainer">
          <section className="topbarForm">
            <HeaderContainer step={1}>
              <ButtonHeader />
            </HeaderContainer>
          </section>

          <section className="leftForm mx-4 mt-3">
            <PaymentForm />
          </section>

          <section
            className="rightForm p-3 bg-primary d-none d-md-block"
            style={{ minWidth: "400px", maxWidth: "400px" }}
          >
            <FormInputsView />
          </section>

          <ModalConfirmPayment />
        </div>
      </Form>
    </Formik>
  );
};

export default PaymentFormPage;

const ButtonHeader = () => {
  const formik = useFormikContext();
  const setBtnClicked = usePayment((s) => s.setBtnClicked);
  const existClient = usePayment((s) => s.existClient);

  const onClickConfirm = () => {
    eventClickConfirm();
  };

  const eventClickConfirm = async () => {
    setBtnClicked("showModalConfirm");
    formik.submitForm();
  };

  const onClickCancel = () => {};

  return (
    <div className="d-flex gap-2 me-md-3 mt-2 mt-md-0 gap-3">
      <Button
        variant="text"
        color="primary"
        sx={{ borderRadius: "50px" }}
        onClick={onClickCancel}
      >
        Cancelar
      </Button>
      <Button
        disabled={!existClient || !formik.isValid}
        onClick={onClickConfirm}
        variant="contained"
        color="secondary"
        sx={{ borderRadius: "50px", width: "340px" }}
      >
        Continuar
      </Button>
    </div>
  );
};
