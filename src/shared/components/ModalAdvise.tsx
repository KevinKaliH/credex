import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useModalAdvise from "../context/modalAdvise.context";

const ModalAdvise = () => {
  const { visible, message, title, setVisible } = useModalAdvise();

  const onClickAccept = () => {
    setVisible(false, { message, title });
  };

  return (
    <Dialog
      disableAutoFocus
      disableEnforceFocus
      open={visible}
      keepMounted
      onClose={onClickAccept}
      maxWidth="md"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title ?? "Aviso"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="info"
          sx={{ borderRadius: "50px" }}
          onClick={onClickAccept}
        >
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalAdvise;
