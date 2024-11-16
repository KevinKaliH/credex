import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

const FoundAlert = () => {
    return (
        <Alert variant="filled" severity="success" sx={{ marginBottom: 2 }}>
            <AlertTitle>Cliente encontrado</AlertTitle>
            Cliente: DANNA JAEN
        </Alert>
    )
}

export default FoundAlert
