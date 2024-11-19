import EditNoteIcon from "@mui/icons-material/EditNote";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import DialogClearForm from "./DialogClearForm";
import ActionFormButtonsHelper from "@payment/helpers/ActionFormButtons.helper";
import { IconButton } from "@mui/material";

const ActionFormButtons = () => {
  const {
    message,
    showDialog,
    existClient,
    onClickEdit,
    onClickClose,
    onClickClear,
    onClickAccept,
  } = ActionFormButtonsHelper();

  return (
    <>
      <IconButton  color="info" onClick={onClickClear}>
        <AutorenewIcon />
      </IconButton>

      <IconButton className="ms-2" color="warning" onClick={onClickEdit} disabled={!existClient}>
        <EditNoteIcon />
      </IconButton>
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
