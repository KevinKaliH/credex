import { useFormikContext } from "formik";

import Button from "@mui/material/Button";
import usePayment from "@payment/context/payment.context";

const HeaderButtons = () => {
  const formik = useFormikContext();
  const setBtnClicked = usePayment((s) => s.setBtnClicked);
  const existClient = usePayment((s) => s.existClient);

  const onClickConfirm = () => {
    setBtnClicked("showModalConfirm");
    formik.submitForm();
  };

  const onClickCancel = () => {};

  return (
    <div className="d-flex gap-2 me-md-3 mt-2 mt-md-0 gap-3">
      <Button
        variant="text"
        color="primary"
        sx={{ borderRadius: "50px" }}
        onClick={onClickCancel}
      >
        Cancelar
      </Button>
      <Button
        disabled={!existClient || !formik.isValid}
        onClick={onClickConfirm}
        variant="contained"
        color="secondary"
        sx={{ borderRadius: "50px", width: "340px" }}
      >
        Continuar
      </Button>
    </div>
  );
};

export default HeaderButtons;
