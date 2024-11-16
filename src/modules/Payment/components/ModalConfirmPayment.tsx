import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Fade from "@mui/material/Fade"
import Modal from "@mui/material/Modal"
import InfoIcon from '@mui/icons-material/Info';
import Button from "@mui/material/Button";

interface Props {
    handleActionModalConfirm: () => void;
    showModal: boolean;
}

const ModalConfirmPayment = ({ handleActionModalConfirm, showModal }: Props) => {
    return (
        <Modal
            disableEnforceFocus
            disableAutoFocus
            disablePortal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={showModal}
            onClose={handleActionModalConfirm}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={showModal}>
                <Box sx={style} className="d-grid">
                    <p className="fw-semibold text-uppercase text-primary">Confirmacion</p>
                    <div className="d-flex align-content-center">
                        <InfoIcon fill="red" style={{ fill: 'skyBlue' }} />
                        <p>¿Desea efectuar el pago?</p>
                    </div>
                    <div className="d-flex gap-2 me-md-3 mt-2 mt-md-0 gap-3" style={{ justifySelf: 'end' }}>
                        <Button variant="text" color="primary" sx={{ borderRadius: "50px" }}>Cancelar</Button>
                        <Button type='submit' variant="contained" color="secondary" sx={{ borderRadius: "50px" }}>Continuar</Button>
                    </div>
                </Box>
            </Fade>
        </Modal>
    )
}

export default ModalConfirmPayment

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 2,
};