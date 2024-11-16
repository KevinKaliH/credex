import PaymentForm from "../components/PaymentForm";
import FormInputsView from "../components/FormInputsView";
import { Form, Formik } from "formik";
import PaymentFormPageHelper from "../helpers/PaymentFormPage.helper";
import FormTopBar from "../components/FormTopBar";
import ModalConfirmPayment from "../components/ModalConfirmPayment";

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
