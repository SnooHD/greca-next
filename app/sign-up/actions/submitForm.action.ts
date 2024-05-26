'use server'

import { validationSchema } from '@/app/utils/formValidation.util';
import { ZodError } from "zod";

export type State =
  | {
      status: "success" | "error";
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;
 
export async function SignUpAction(
  prevState: State | null, 
  data: FormData
): Promise<State>{
  // we're gonna put a delay in here to simulate some kind of data processing like persisting data
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let validatedFields;
  try{
    validatedFields = validationSchema.parse(data);
  }catch(e){
    if (e instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data",
        errors: e.issues.map(({path, message}) => ({
          path: path.join("."),
          message
        })),
      };
    }

    return {
      status: "error",
      message: "something went wrong"
    }
  }
  
  // Do something with the data here like putting it in a DB
  const JSONData = JSON.stringify(Object.fromEntries(data));
  console.log(JSONData);

  return {
    status: "success",
    message: 'Welcome!'
  };
}