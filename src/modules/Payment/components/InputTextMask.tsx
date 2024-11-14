import FormControl from '@mui/material/FormControl'
import TextField from "@mui/material/TextField";
import { ChangeEvent, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { forwardRef } from 'react';

const InputTextMask = () => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);

        setValue(event.target.value);
    };

    return <FormControl variant="filled" fullWidth sx={{ m: 1 }}>
        <TextField
            label='Numero de documento'
            name={'documentValue'}
            value={value}
            fullWidth
            variant='filled'
            onChange={handleChange}
            slotProps={{
                input: {
                    inputComponent: TextMaskCustom as any
                }
            }}
        />
    </FormControl>
}
export default InputTextMask

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

export const TextMaskCustom = forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="###-######-####L"
                definitions={{
                    '#': /[1-9]/,
                    'L': /[A-Za-z]/
                }}
                inputRef={ref}
                onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    },
);
