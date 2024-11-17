import { Form, Formik } from "formik";

import PaymentFormPageHelper from "@payment/helpers/PaymentFormPage.helper";
import ModalConfirmPayment from "@payment/components/ModalConfirmPayment";
import PaymentForm from "@payment/components/PaymentForm";
import FormInputsView from "@payment/components/FormInputsView";
import HeaderContainer from "@/shared/components/HeaderContainer";
import HeaderButtons from "@payment/components/HeaderButtons";

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
              <HeaderButtons />
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
