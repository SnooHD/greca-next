import { FormValidationSchema } from '@/types/form.types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    FormHTMLAttributes,
    PropsWithChildren,
} from 'react';
import {
    FormProvider,
    useForm,
} from 'react-hook-form';

interface FormProps
    extends PropsWithChildren<FormHTMLAttributes<HTMLFormElement>> {
    name: string;
    validationSchema: any;
}

export const Form = ({
    children,
    name,
    validationSchema,
    ...rest
}: FormProps) => {
    const form = useForm<FormValidationSchema>({ 
        mode: 'all',
        resolver: zodResolver(validationSchema)
    });
      
    return (
        <form
            {...rest}
        >
            <FormProvider {...form}>{children}</FormProvider>
        </form>
    );
};
