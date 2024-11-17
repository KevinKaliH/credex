import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface Props {
  show: boolean;
  message: string;
  onClickClose: () => void;
  onClickAccept: () => void;
}

const DialogClearForm = ({
  show,
  message,
  onClickClose,
  onClickAccept,
}: Props) => {
  return (
    <Dialog
      disableAutoFocus
      disableEnforceFocus
      open={show}
      keepMounted
      onClose={onClickClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Aviso!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickClose}>Cancelar</Button>
        <Button onClick={onClickAccept}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogClearForm;
