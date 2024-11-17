import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  urlPdf: string;
  isVisiblePdf: boolean;
  hideModal: (...args: any[]) => void;
}

const ModalConfirmPayment = ({ urlPdf, isVisiblePdf, hideModal }: Props) => {
  return (
    <Dialog open={isVisiblePdf} onClose={hideModal}>
      <DialogTitle>
        Modal Title
        <IconButton
          edge="end"
          color="inherit"
          onClick={hideModal}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <div style={{ height: "80vh" }}>
        <iframe src={urlPdf} width={"100%"} height={"100%"} />
      </div>
    </Dialog>
  );
};

export default ModalConfirmPayment;
