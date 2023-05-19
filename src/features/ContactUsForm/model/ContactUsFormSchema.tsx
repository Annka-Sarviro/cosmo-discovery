import * as yup from 'yup';

export const ContactUsFormSchema = yup.object({
  email: yup.string().required({ message: 'email is required' }).email({
    message: 'must be a valid email',
  }),
  phone: yup
    .string()
    .required({ message: 'phone is required' })
    .min(6, { message: 'phone must be atleast 6 characters' }),
  firstname: yup
    .string()
    .lowercase()
    .trim()
    .required({ message: 'name is required' })
    .min(3, { message: 'name must be atleast 3 characters' }),
  checkbox: yup.boolean().oneOf([true], 'checkbox must be checked'),
});

export type contactUsFormSchema = yup.InferType<typeof ContactUsFormSchema>;
