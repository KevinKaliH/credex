import { Form, Formik } from "formik";

import PaymentFormPageHelper from "@payment/helpers/PaymentFormPage.helper";
import FormTopBar from "@payment/components/FormTopBar";
import ModalConfirmPayment from "@payment/components/ModalConfirmPayment";
import PaymentForm from "@payment/components/PaymentForm";
import FormInputsView from "@payment/components/FormInputsView";

const PaymentFormPage = () => {
  const { InitialFormModal, onSubmit, validationSchema, visibleAlert, existQuery } = PaymentFormPageHelper();

  return (
    <Formik initialValues={InitialFormModal} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <div className="paymentFormContainer">
          <section className="topbarForm">
            <FormTopBar />
          </section>

          <section className="leftForm mx-4 mt-3">
            <PaymentForm existQuery={existQuery} visibleAlert={visibleAlert} />
          </section>

          <section className="rightForm p-3 bg-primary d-none d-md-block" style={{ minWidth: '400px', maxWidth: '400px' }}>
            <FormInputsView />
          </section>

          <ModalConfirmPayment showModal={false} handleActionModalConfirm={() => { }} />
        </div>
      </Form>
    </Formik>
  );
};

export default PaymentFormPage;
