import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import { useFormikContext } from 'formik';
import { ChangeEvent, useState } from 'react';
import { PaymentFormModel } from '../utils/paymentForm.model';
import { NUMBER_TARGET_HIDE_CHARS } from '../utils/const';

const InputTargetNumber = () => {
    const formik = useFormikContext<PaymentFormModel>();
    const [value, setValue] = useState(formik.initialValues.targetNumber)

    const commonAction = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(event.target.value);

        if (/^\d*$/.test(event.target.value)) {
            formik.setFieldValue(event.target.name, event.target.value)
            setValue(event.target.value);
        }
    }

    const maskedValue = value.length > NUMBER_TARGET_HIDE_CHARS ? '*'.repeat(NUMBER_TARGET_HIDE_CHARS) + value.slice(NUMBER_TARGET_HIDE_CHARS) : '*'.repeat(value.length);

    return <FormControl fullWidth sx={{ m: 1 }} variant="filled">
        <TextField
            value={maskedValue}
            id="targetNumber"
            name='targetNumber'
            label="Número de tarjeta"
            variant="filled"
            onChange={commonAction}
            onBlur={commonAction}
            error={formik.touched.targetNumber && Boolean(formik.errors.targetNumber)}
            helperText={formik.touched.targetNumber && formik.errors.targetNumber}
        />
    </FormControl>
}

export default InputTargetNumber;