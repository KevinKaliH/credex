import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton';

import { useFormikContext } from 'formik';
import { TextMaskCustom } from './InputTextMask';
import { PaymentFormModel } from '../utils/paymentForm.model';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';

const InputTargetNumber = () => {
    const form = useFormikContext<PaymentFormModel>();
    const [showPassword, setShowPassword] = useState(false);

    const onClickVisible = () => {
        setShowPassword(pre => !pre);
    }

    return <FormControl variant="filled" fullWidth sx={{ m: 1 }}>
        <TextField
            label='Número de tarjeta'
            name='targetNumber'
            id='targetNumber'
            value={form.values.targetNumber}
            fullWidth
            variant='filled'
            onChange={form.handleChange}
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