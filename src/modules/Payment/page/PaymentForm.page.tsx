import { Form, Formik, useFormikContext } from "formik";

import PaymentFormPageHelper from "@payment/helpers/PaymentFormPage.helper";
import FormTopBar from "@payment/components/FormTopBar";
import ModalConfirmPayment from "@payment/components/ModalConfirmPayment";
import PaymentForm from "@payment/components/PaymentForm";
import FormInputsView from "@payment/components/FormInputsView";
import Button from "@mui/material/Button";

const PaymentFormPage = () => {
  const {
    onSubmit,
    statePage,
    onClickSearch,
    InitialFormModal,
    validationSchema,
    onClickHideModal,
    onClickAcceptModal,
    onClickCancelPayment,
    onClickDisplayModal,
  } = PaymentFormPageHelper();

  return (
    <Formik
      initialValues={InitialFormModal}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="paymentFormContainer">
          <section className="topbarForm">
            <FormTopBar>
              <div className="d-flex gap-2 me-md-3 mt-2 mt-md-0 gap-3">
                <Button variant="text" color="primary" sx={{ borderRadius: "50px" }} onClick={onClickCancelPayment}>Cancelar</Button>
                <ButtonConfirmForm onClickDisplayModal={onClickDisplayModal} />
              </div>
            </FormTopBar>
          </section>

          <section className="leftForm mx-4 mt-3">
            <PaymentForm
              buttonSearchId={statePage.submitButtonId}
              onClickSearch={onClickSearch}
              existQuery={statePage.existQuery}
              visibleAlert={statePage.visibleAlert}
            />
          </section>

          <section
            className="rightForm p-3 bg-primary d-none d-md-block"
            style={{ minWidth: "400px", maxWidth: "400px" }}
          >
            <FormInputsView />
          </section>

          <ModalConfirmPayment
            showModal={statePage.visibleConfirmModal}
            onClickAcceptModal={onClickAcceptModal}
            onClickHideModal={onClickHideModal}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default PaymentFormPage;

const ButtonConfirmForm = ({ onClickDisplayModal }: any) => {
  const form = useFormikContext();

  const onClickDisplayModalLocal = () => {
    onClickDisplayModal(form);
  }
  return <Button onClick={onClickDisplayModalLocal} variant="contained" color="secondary" sx={{ borderRadius: "50px", width: '340px' }}>Continuar</Button>
}

