import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

import { Error } from './Error.component';
import { FormValidationSchema } from '@/types/form.types';

interface TextInputProps
    extends InputHTMLAttributes<HTMLInputElement> {
    name: keyof FormValidationSchema;
    label: string;
    required?: boolean;
    readOnly?: boolean;
    defaultValue?: string;
}

export const TextInput = ({
    name,
    label,
    className = '',
    required,
    defaultValue,
    readOnly,
    ...rest
}: TextInputProps): JSX.Element => {
    const {
        register,
        formState: { errors: stateErrors }
    } = useFormContext<FormValidationSchema>();

    return (
        <div
            className={`
                w-full
                ${readOnly ? 'cursor-not-allowed' : 'cursor-text'}
            `}
        >
            <div
                className={`
                    w-full block relative
                    ${readOnly ? 'pointer-events-none' : ''}
                `}
            >
                <label>
                    {label}{required ? '*' : ''}
                    <input
                        id={name}
                        type="text"
                        className={`
                            text-base w-full min-h-[38px]
                            p-[2px_8px] border border-gray rounded
                            focus-visible:outline-none
                            transition-color duration-300 shadow-[0_0_0_2px] shadow-[transparent]
                            autofill:!shadow-[0_0_0_2px] autofill:hover:!shadow-[0_0_0_2px]
                            autofill:active:!shadow-[0_0_0_2px] autofill:focus-visible:!shadow-[0_0_0_2px]
                            autofill:!shadow-transparent autofill:hover:!shadow-transparent
                            read-only:cursor-not-allowed read-only:text-grey-disabled
                            focus-visible:border-[transparent]
                            active:border-[transparent]
                            ${defaultValue ? 'read-only:!text-grey-disabled !text-anthracite' : ''}
                            ${stateErrors[name] ? '!bg-error' : ''}
                            ${
                                stateErrors[name] ? ` 
                                    focus-visible:shadow-red
                                    active:shadow-red
                                    autofill:focus-visible:!shadow-red 
                                    autofill:active:!shadow-red 
                                `
                                : `
                                    focus-visible:shadow-blue
                                    active:shadow-blue
                                    autofill:focus-visible:!shadow-blue 
                                    autofill:active:!shadow-blue 
                                `
                            }
                        `}
                        readOnly={readOnly}
                        {...register(name, {
                            required,
                            value: defaultValue
                        })}
                        {...rest}
                    />
                </label>
            </div>
            <div
                className={`font-heading-double transition-[padding] duration-300 ${
                   stateErrors[name] ? 'py-xxxs' : 'pt-0'
                }`}
            >
                <Error
                    error={stateErrors[name]?.message}
                />
            </div>
        </div>
    );
};
