import { useState } from "react";
import { maskCep, maskCpf, maskPhone, maskPrice, validateCpf, maskLastDigitePlate, maskCylinder, mileageTraveled, search_id } from "./useMask";

const types:any = {
    cep: {
        regex: /^\d{5}-?\d{3}$/,
        mask: maskCep,
        message: 'Cep inválido'
    },
    cpf: {
        regex: /^\d{3}.?\d{3}.?\d{3}-?\d{2}$/,
        mask: maskCpf,
        message: 'CPF inválido'
    },
    tel: {
        regex: /^\(\d{2}\) \d{5}-?\d{4}$/,
        mask: maskPhone,
        message: 'Número inválido'
    },
    price: {
        regex: /^[1-9]?(\d{2})?(.?\d{3})*?,\d{2}$/,
        mask: maskPrice,
        message: 'Preço inválido'
    },
    last_digit_plate: {
        regex: /^\d{1}$/,
        mask: maskLastDigitePlate,
        message: 'Digito inválido'
    },
    cylinder: {
        regex: /^\d{2,4}$/,
        mask: maskCylinder,
        message: 'Digito inválido'
    },
    mileage_traveled: {
        regex: /^[1-9]?(\d{2})?(.?\d{3})*$/,
        mask: mileageTraveled,
        message: 'Digito inválido'
    },
    search_id: {
        regex: /^\d{8,11}$/,
        mask: search_id,
        message: 'Identificador inválido'
    },

}

export function useForm(type:any) {
    const [value, setValue] = useState('');
    const [error, setError] = useState<null | string>(null);

    function validate(value:any) {
        if (value.length === 0) {
            setError('Preencha um valor');
            return false;
        } else if (type === 'cpf') {
            if (!validateCpf(value)) {
                setError(types[type].message);
                return false;
            } else {
                setError(null);
                return true;
            }
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({ target }:any) {
        if (error) validate(target.value);
        if (types[type]) {
            if(type === "price" || type == "mileage_traveled") {
                types[type].mask(target);
                setValue(target.value);
            } else {
                setValue(types[type].mask(target.value));
            }
        } else {
            setValue(target.value);
        }

    }

    return {
        value,
        setValue,
        error,
        setError,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value)
    }
}

export default useForm