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
              <HeaderButtons />
            </HeaderContainer>
          </section>

          <section className="leftForm mx-4 mt-3 ms-5">
            <PaymentForm />
          </section>

          <Box
            className="rightForm p-3 bg-primary d-none d-md-block"
            sx={{
              width: {
                sm: '280px',
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
