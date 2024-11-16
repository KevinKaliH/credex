import Alert from "@mui/material/Alert"
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  closeAlert: () => void;
}

const NotFoundAlert = ({ closeAlert }: Props) => {
  return (<Alert variant="filled" severity="error" sx={{ marginBottom: 2 }} action={
    <IconButton
      aria-label="close"
      color="inherit"
      size="small"
      onClick={() => {
        closeAlert
      }}
    >
      <CloseIcon fontSize="inherit" />
    </IconButton>
  }>
    Cliente no encontrado
  </Alert>)
}
export default NotFoundAlert