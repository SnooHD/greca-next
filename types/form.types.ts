import { validationSchema } from "@/app/utils/formValidation.util";
import { z } from "zod";

export type FormValidationSchema = z.infer<typeof validationSchema>;