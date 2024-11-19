import { Form, Formik } from "formik";

import PaymentFormPageHelper from "@payment/helpers/PaymentFormPage.helper";
import ModalConfirmPayment from "@payment/components/ModalConfirmPayment";
import PaymentForm from "@payment/components/PaymentForm";
import FormInputsView from "@payment/components/FormInputsView";
import HeaderContainer from "@/shared/components/HeaderContainer";
import HeaderButtons from "@payment/components/HeaderButtons";
import Box from "@mui/material/Box";

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
              <div className="d-none d-md-block">
                <HeaderButtons />
              </div>
            </HeaderContainer>
          </section>

          <section className="leftForm mx-4 mt-3">
            <PaymentForm />
            <div className="d-md-none d-block mb-5">
              <HeaderButtons isFooter={true} />
            </div>
          </section>

          <Box
            className="rightForm p-3 bg-primary d-none d-md-block"
            sx={{
              width: {
                sm: "280px",
                md: "300px",
              },
            }}
          >
            <FormInputsView />
          </Box>

          <ModalConfirmPayment />
        </div>
      </Form>
    </Formik>
  );
};

export default PaymentFormPage;
