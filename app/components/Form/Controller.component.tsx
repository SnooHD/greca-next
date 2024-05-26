import { Controller, ControllerProps, useFormContext } from 'react-hook-form';

export const TextInput = ({
    ...props
}: ControllerProps): JSX.Element => {
    const {
        control,
    } = useFormContext();

    return (
        <Controller
            control={control}
            {...props}
        />
    );
};
