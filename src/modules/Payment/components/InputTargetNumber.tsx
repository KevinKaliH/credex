import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';

import { useFormikContext } from 'formik';
import { TextMaskCustom } from './InputTextMask';
import { PaymentFormModel } from '@payment/utils/paymentForm.model';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { ChangeEvent, useState } from 'react';
import { NUMBER_TARGET_SHOW_CHARS } from '@payment/utils/const';

const InputTargetNumber = () => {
    const form = useFormikContext<PaymentFormModel>();
    const [showPassword, setShowPassword] = useState(false);

    const onClickVisible = () => {
        setShowPassword(pre => !pre);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        form.handleChange(event);
        const value = event.target.value;

        form.setFieldValue('targetNumberMask', maskInput(value));
    }

    return <FormControl variant="filled" fullWidth sx={{ m: 1 }}>
        <TextField
            label='Número de tarjeta'
            name='targetNumber'
            id='targetNumber'
            value={form.values.targetNumber}
            fullWidth
            variant='filled'
            onChange={handleChange}
            onBlur={form.handleBlur}
            error={form.touched.targetNumber && Boolean(form.errors.targetNumber)}
            helperText={form.touched.targetNumber && form.errors.targetNumber}
            slotProps={{
                input: {
                    endAdornment: (
                        <IconButton onClick={onClickVisible}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    ),
                    inputProps: {
                        displayChar: showPassword ? undefined : '*',
                        mask: '#### #### #### ####',
                        overwrite: false,
                    },
                    inputComponent: TextMaskCustom as any
                }
            }}
        />
    </FormControl>
}

export default InputTargetNumber;

function maskInput(textValue: string) {
    const text = textValue.replace(/\s+/g, ''); // remove space
    if (text.length <= NUMBER_TARGET_SHOW_CHARS)
        return text;

    const length = text.length;
    const textSecurity = '*'.repeat(length - NUMBER_TARGET_SHOW_CHARS) + text.slice(-NUMBER_TARGET_SHOW_CHARS);
    const temp = textSecurity.replace(/(.{4})(?=.)/g, '$1 ');

    return temp;
}
