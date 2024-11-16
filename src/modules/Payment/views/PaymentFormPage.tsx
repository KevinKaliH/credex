import PaymentForm from "../components/PaymentForm";
import FormInputsView from "../components/FormInputsView";
import { Form, Formik } from "formik";
import PaymentFormPageHelper from "../helpers/PaymentFormPage.helper";

const PaymentFormPage = () => {
  const { InitialFormModal, onSubmit, validationSchema, visibleAlert } = PaymentFormPageHelper();

  return (
    <Formik initialValues={InitialFormModal} onSubmit={onSubmit} validationSchema={validationSchema}>
      <div className="paymentFormPage">
        <div className="mx-4 mt-3">
          <Form>
            <PaymentForm visibleAlert={visibleAlert} />
          </Form>
        </div>
        <div className="p-3 bg-primary d-none d-md-block" style={{ minWidth: '400px' }}>
          <FormInputsView />
        </div>
      </div>
    </Formik>

  );
};

export default PaymentFormPage;
