'use client';
import Select from "react-select";
import { TextInput } from "@components/Form/TextInput.component";
import { Form } from "@components/Form/Form.component";
import { validationSchema } from "@utils/formValidation.util";
import { Controller, FieldPath, useFormContext } from "react-hook-form";
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from "@components/Button.component";
import { SignUpAction, State } from "@/app/sign-up/actions/submitForm.action";
import { useEffect, useState } from "react";
import { Error } from "@components/Form/Error.component";
import { FormValidationSchema } from "@/types/form.types";
import dynamic from "next/dynamic";

// Mapbox does not work with SSR since its using window.document, so we load it dynamicly.
const SearchAddressDynamic = dynamic(
  () => import('../../components/Form/SearchAddress.component'), 
  { ssr: false}
)

const SignUpFormContent = ({
  state,
}: {
  state?: State;
}): JSX.Element => {
  const [requestError, setRequestError] = useState('');
  const [requestSuccess, setRequestSuccess] = useState(false);
  const {
    setError,
    watch
  } = useFormContext<FormValidationSchema>();
  const { pending } = useFormStatus();

  // reset form state when input changes after it was sent
  useEffect(() => {
    const subscription = watch(() => {
      if(!requestSuccess) return;
      setRequestSuccess(false);
    });
    return () => subscription.unsubscribe();
  }, [requestSuccess, watch])

  useEffect(() => {
    if (!state) {
      return;
    }

    setRequestError('');
    setRequestSuccess(false);

    switch(state.status){
      case 'error':
        if(!state.errors){
          setRequestError(state.message);
          return;
        }

        state.errors?.forEach(({path, message}) => {
          setError(path as FieldPath<FormValidationSchema>, {
            message
          });
        });
        break;
      case 'success':
        setRequestSuccess(true);
    }
  }, [state, setError]);
  
  const ageGroup = [
    { value: "adult", label: "Adult" },
    { value: "child", label: "Child" },
    { value: "infant", label: "Infant" }
  ]

  return (
    <>
      <TextInput
          name="firstName"
          label="First name"
      />
      <TextInput
          name="email"
          label="Email"
      />
      <Controller
          name="ageGroup"
          render={({ field }) => (
              <div>
                <label>
                    Age group
                    <Select 
                    {...field} 
                    options={ageGroup} 
                    />
                </label>
              </div>
          )}
      />
      <SearchAddressDynamic />
      <Button disabled={pending || requestSuccess} type="submit">
        {pending ? 'Sending...' : ''}
        {requestSuccess ? 'Sent' : ''}
        {!pending && !requestSuccess ? 'Send' : ''}
      </Button>
      {requestSuccess && (<span className="pl-4">Form was successfully sent!</span>) }
      <Error error={requestError} />
    </>
  )
}

export const SignUpForm = () => {
  const [state, formAction] = useFormState<State, FormData>(SignUpAction, null);
  
  return (
    <Form
      action={formAction}
      name="user-data"
      className="space-y-xs max-w-[420px] w-full"
      validationSchema={validationSchema}
    >
        <SignUpFormContent state={state} />
    </Form>
  );
}
