import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import { useState } from 'react';

const InputTargetNumber = () => {
    const [value, setValue] = useState('');

    const handleChange = (event: any) => {
        const input = event.target.value;

        if (/^\d*$/.test(input)) {
            setValue(input);
        }
    }

    return <FormControl fullWidth sx={{ m: 1 }} variant="filled">
        <TextField
            value={value}
            id="targetNumber"
            label="Número de tarjeta"
            variant="filled"
            onChange={handleChange}
        />
    </FormControl>
}

export default InputTargetNumber;