import { IMaskInput } from 'react-imask';
import { forwardRef } from 'react';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
    mask?: string;
}

export const TextMaskCustom = forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <IMaskInput
                {...other}
                // mask="###-######-####L"
                definitions={{
                    '#': /[0-9]/,
                    'L': /[A-Za-z]/
                }}
                inputRef={ref}
                onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    },
);
