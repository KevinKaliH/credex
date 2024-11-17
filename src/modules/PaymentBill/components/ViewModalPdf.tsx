import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";

interface Props {
  urlPdf: string;
  isVisiblePdf: boolean;
  hideModal: (...args: any[]) => void;
}

const ViewModalPdf = ({ urlPdf, isVisiblePdf, hideModal }: Props) => {
  return (
    <Dialog
      open={isVisiblePdf}
      onClose={hideModal}
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle>
        Comprobante de pago
        <IconButton
          edge="end"
          color="inherit"
          onClick={hideModal}
          aria-label="close"
          sx={{
            position: "absolute",
            right: 28,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent style={{ height: "80vh" }}>
        <iframe className="w-100 h-100" src={urlPdf} />
      </DialogContent>
    </Dialog>
  );
};

export default ViewModalPdf;
