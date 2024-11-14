import PaymentForm from "../components/PaymentForm";
import FormInputsView from "../components/FormInputsView";

const PaymentFormPage = () => {
  return (
    <div className="paymentFormPage">
      <div className="ms-4">
        <PaymentForm />
      </div>
      <div className="p-3 bg-primary">
        <FormInputsView />
      </div>
    </div>
  );
};

export default PaymentFormPage;
