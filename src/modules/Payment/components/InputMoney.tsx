import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField'

import { useState, ChangeEvent, forwardRef } from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

const InputMoney = () => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return <FormControl fullWidth sx={{ m: 1 }} variant="filled">
        <TextField
            label="Monto a pagar"
            value={value}
            onChange={handleChange}
            name="numberformat"
            id="formatted-numberformat-input"
            slotProps={{
                input: {
                    startAdornment: <InputAdornment position="start">C$</InputAdornment>,
                    inputComponent: NumericFormatCustom as any,
                },
            }}
            variant="filled"
        /></FormControl>
}
export default InputMoney;

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>(
    function NumericFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value,
                        },
                    });
                }}
                thousandSeparator
                valueIsNumericString
                allowNegative={false}
            // prefix="$"
            />
        );
    },
);