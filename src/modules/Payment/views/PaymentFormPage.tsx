import PaymentForm from "../components/PaymentForm";
import FormInputsView from "../components/FormInputsView";
import { Form, Formik } from "formik";
import PaymentFormPageHelper from "../helpers/PaymentFormPage.helper";

const PaymentFormPage = () => {
  const { InitialFormModal, onSubmit, validationSchema } = PaymentFormPageHelper();

  return (
    <Formik initialValues={InitialFormModal} onSubmit={onSubmit} validationSchema={validationSchema}>
      <Form>
        <div className="paymentFormPage">
          <div className="mx-4 mt-3">
            <PaymentForm />
          </div>
          <div className="p-3 bg-primary d-none d-md-block">
            <FormInputsView />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default PaymentFormPage;
