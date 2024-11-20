import { useFormikContext } from "formik";

import Button from "@mui/material/Button";
import usePayment from "@payment/context/payment.context";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Props {
  isFooter?: boolean;
}

const HeaderButtons = ({ isFooter = false }: Props) => {
  const formik = useFormikContext();
  const setBtnClicked = usePayment((s) => s.setBtnClicked);
  const existClient = usePayment((s) => s.existClient);

  const onClickConfirm = () => {
    setBtnClicked("showModalConfirm");
    formik.submitForm();
  };

  const onClickCancel = () => {
    window.parent.history.back();
  };

  return (
    <div
      className="d-flex gap-2 me-md-3 mt-2 mt-md-0 gap-3"
      style={{ flexDirection: isFooter ? "column" : "row" }}
    >
      <Button
        style={{ order: isFooter ? 2 : 1 }}
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
        endIcon={<ArrowForwardIcon />}
        variant="contained"
        color="success"
        sx={{
          borderRadius: "50px",
          width: {
            md: "340px",
          },
          order: isFooter ? 1 : 2,
        }}
      >
        Continuar
      </Button>
    </div>
  );
};

export default HeaderButtons;
