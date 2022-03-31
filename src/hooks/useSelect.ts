import { useRef, useState } from "react";

export function useSelect() {
    const [value, setValue] = useState<any>('0');
    const select = useRef(null);
    const [error, setError] = useState<string | boolean | null>(null);

    const validate = (value: any) => {
        if (!value || value === '0') {
            setError('Selecione um valor válido');
            return false;
        } else {
            setError(null);
            return true;
        }
    }
    const onChange = (value: any) => {
        setValue(value);
        validate(value);
    }

    return {
        select,
        error,
        value,
        setValue,
        setError,
        onBlur: () => validate(select.current?.value),
        validate: (value) => validate(value),
        onChange,
    }
}