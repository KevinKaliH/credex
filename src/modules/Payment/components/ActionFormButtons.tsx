import Button from "@mui/material/Button";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DialogClearForm from "./DialogClearForm";
import ActionFormButtonsHelper from "@payment/helpers/ActionFormButtons.helper";

const ActionFormButtons = () => {
  const {
    message,
    isDirty,
    showDialog,
    existClient,
    onClickEdit,
    onClickClose,
    onClickClear,
    onClickAccept,
  } = ActionFormButtonsHelper();

  return (
    <>
      <Button
        variant="contained"
        color="success"
        disabled={isDirty}
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
