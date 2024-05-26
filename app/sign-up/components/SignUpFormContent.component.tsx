'use client';

import type { FormValidationSchema } from "@/types/form.types";

import { useEffect, useState } from "react";
import { useFormStatus } from 'react-dom';
import { FieldPath, useFormContext } from "react-hook-form";
import { State } from "@/app/sign-up/actions/submitForm.action";
import { AgeGroupSelect } from "./AgeGroupSelect.component";
import { TextInput } from "@components/Form/TextInput.component";
import { Button } from "@components/Button.component";
import { Error } from "@components/Form/Error.component";
import { SearchAddress } from "@components/Form/SearchAddress/SearchAddress.component";

export const SignUpFormContent = ({
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

  return (
    <>
      <TextInput
          name="firstName"
          label="First name"
          autoComplete="given-name"
      />
      <TextInput
          name="email"
          label="Email"
          autoComplete="email"
      />
      <AgeGroupSelect />
      <SearchAddress />
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
