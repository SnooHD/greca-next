'use client'

import { useFormState } from "react-dom";
import { SignUpAction, State } from "./actions/submitForm.action";
import { SignUpFormContent } from "./components/SignUpFormContent.component";
import { Title } from "@components/Title.component";
import { Form } from "@components/Form/Form.component";
import { validationSchema } from "@utils/formValidation.util";

export default function SignUp() {
  const [state, formAction] = useFormState<State, FormData>(SignUpAction, null);
  
  return (
    <main className="flex flex-col items-center p-4">
      <Title size="h1">Sign up</Title>
      <Form
        action={formAction}
        name="user-data"
        className="space-y-xs max-w-[420px] w-full"
        validationSchema={validationSchema}
      >
        <SignUpFormContent state={state} />
      </ Form>
    </main>
  );
}
