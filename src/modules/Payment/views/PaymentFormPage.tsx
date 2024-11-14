import PaymentForm from "../components/PaymentForm";
import FormInputsView from "../components/FormInputsView";
import PaymentFormHelper from "../helpers/PaymentForm.helper";

const PaymentFormPage = () => {
  const _ = PaymentFormHelper();

  return (
    <div className="paymentFormPage">
      <div className="mx-4 mt-3">
        <PaymentForm />
      </div>
      <div className="p-3 bg-primary d-none d-md-block">
        <FormInputsView />
      </div>
    </div>
  );
};

export default PaymentFormPage;
