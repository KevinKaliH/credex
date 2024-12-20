import { useFormikContext } from "formik";
import { useState } from "react";
import usePayment from "@payment/context/payment.context";

const ActionFormButtonsHelper = () => {
  const form = useFormikContext();

  const [showDialog, setShowDialog] = useState(false);
  const [message, setMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const { existClient, setExistClient, resetState, setVisibleAlert } =
    usePayment();

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
    setVisibleAlert(false);
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

  return {
    message,
    showDialog,
    existClient,
    onClickEdit,
    onClickClose,
    onClickClear,
    onClickAccept,
  };
};

export default ActionFormButtonsHelper;
