import PaymentForm from "../components/PaymentForm";
import FormInputsView from "../components/FormInputsView";
import { Form, Formik } from "formik";
import PaymentFormPageHelper from "../helpers/PaymentFormPage.helper";
import Collapse from "@mui/material/Collapse";
import FoundAlert from "../components/FoundAlert";
import NotFoundAlert from "../components/NotFoundAlert";

const PaymentFormPage = () => {
  const { InitialFormModal, onSubmit, validationSchema, visibleAlert, closeAlert, existQuery } = PaymentFormPageHelper();

  return (
    <Formik initialValues={InitialFormModal} onSubmit={onSubmit} validationSchema={validationSchema}>
      <div className="paymentFormPage">
        <div className="mx-4 mt-3">
          <Form>
            <PaymentForm />

            <Collapse in={visibleAlert}>
              {existQuery ? <FoundAlert /> : <NotFoundAlert closeAlert={closeAlert} />}
            </Collapse>
          </Form>
        </div>
        <div className="p-3 bg-primary d-none d-md-block" style={{ minWidth: '400px', maxWidth: '400px' }}>
          <FormInputsView />
        </div>
      </div>
    </Formik>
  );
};

export default PaymentFormPage;
