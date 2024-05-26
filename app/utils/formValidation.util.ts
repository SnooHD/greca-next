import { zfd } from "zod-form-data";
import { z } from "zod";

export const validationSchema = zfd.formData({
    firstName: zfd.text(z.string({message: "First name is required"})),
    email: zfd.text(z.string({message: 'Email is required'}).email('Please enter a valid email')),
    ageGroup: zfd.text(z.string().optional()),
    address: zfd.text(z.string().optional())
});