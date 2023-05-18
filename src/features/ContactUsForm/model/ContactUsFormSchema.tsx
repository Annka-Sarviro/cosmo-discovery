import * as yup from 'yup';

export const ContactUsFormSchema = yup.object({
  email: yup
    .string()
    .required({ message: 'Email is required' })
    .min(1, { message: 'Email is required' })
    .email({
      message: 'Must be a valid email',
    }),
  phone: yup
    .string()
    .required({ message: 'phone is required' })
    .min(6, { message: 'Password must be atleast 6 characters' }),
  name: yup
    .string()
    .required({ message: 'name is required' })
    .min(3, { message: 'Name must be atleast 3 characters' }),
  checkbox: yup.boolean(),
});

export type contactUsFormSchema = yup.InferType<typeof ContactUsFormSchema>;
