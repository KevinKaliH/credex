import Button from "@mui/material/Button";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useFormikContext } from "formik";
import { useState } from "react";
import usePayment from "@payment/context/payment.context";
import DialogClearForm from "./DialogClearForm";

const ActionFormButtons = () => {
  const form = useFormikContext();

  const [showDialog, setShowDialog] = useState(false);
  const [message, setMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const existClient = usePayment((s) => s.existClient);
  const setExistClient = usePayment((s) => s.setExistClient);
  const resetState = usePayment((s) => s.resetState);

  const onClickClear = () => {
    if (!form.dirty) {
      form.resetForm();
      return;
    }

    setReferenceId("clear");
    setShowDialog(true);
    setMessage(
      "Hay cambios en el fomulario, ¿desea borrar los datos ingresados?"
    );
  };

  const onClickEdit = () => {
    setExistClient(false);
    form.setFieldValue("valuePay", undefined);
  };

  const onClickAccept = () => {
    setShowDialog(false);
    if (referenceId == "clear") {
      form.resetForm();
      resetState();
      return;
    }
  };

  const onClickClose = () => setShowDialog(false);

  return (
    <>
      <Button
        variant="contained"
        color="success"
        startIcon={<AutorenewIcon />}
        onClick={onClickClear}
        sx={{
          m: 1,
          borderRadius: "50px",
        }}
      >
        Nuevo
      </Button>

      <Button
        variant="contained"
        color="warning"
        startIcon={<EditNoteIcon />}
        disabled={!existClient}
        onClick={onClickEdit}
        sx={{
          m: 1,
          borderRadius: "50px",
        }}
      >
        Editar
      </Button>
      <DialogClearForm
        message={message}
        onClickClose={onClickClose}
        onClickAccept={onClickAccept}
        show={showDialog}
      />
    </>
  );
};

export default ActionFormButtons;
