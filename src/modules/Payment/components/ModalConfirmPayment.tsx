import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import ModalConfirmPaymentHelper from "@payment/helpers/ModalConfirmPayment.helper";

const ModalConfirmPayment = () => {
  const { onClickHideModal, visibleConfirmModal, onClickAcceptModal } =
    ModalConfirmPaymentHelper();

  return (
    <Modal
      disableEnforceFocus
      disableAutoFocus
      disablePortal
      open={visibleConfirmModal}
      onClose={onClickHideModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={visibleConfirmModal}>
        <Box sx={style} className="d-grid">
          <p className="fw-semibold text-uppercase text-blue">
            Confirmacion
          </p>
          <div className="d-flex align-items-center mb-3">
            <InfoIcon fill="red" style={{ fill: "skyBlue" }} />
            <p className="mb-0 ms-3">¿Desea efectuar el pago?</p>
          </div>
          <div
            className="d-flex gap-2 me-md-3 mt-2 mt-md-0 gap-3"
            style={{ justifySelf: "end" }}
          >
            <Button
              variant="text"
              color="primary"
              sx={{ borderRadius: "50px" }}
              onClick={onClickHideModal}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: "50px" }}
              onClick={onClickAcceptModal}
            >
              Continuar
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalConfirmPayment;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  width: {
    xs: "90%",
    sm: "500px",
  },
  p: 2,
};
