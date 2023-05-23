import * as yup from 'yup';
const nameSchema = /^[aA-zZ\s]+$/;
const phoneSchema = /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

export const ContactUsFormSchema = yup.object({
  email: yup.string().required('email is required').email({
    message: 'must be a valid email',
  }),
  phone: yup
    .string()
    .trim()
    .required('phone is required')
    .matches(phoneSchema, 'phone must be in the format: +38 (000) 0000000')
    .min(12, 'phone must be at least 12 characters'),
  firstname: yup
    .string()
    .lowercase()
    .trim()
    .required('name is required')
    .matches(nameSchema, 'name must be only letters')
    .min(3, { message: 'name must be at least 3 characters' }),
  checkbox: yup.boolean().oneOf([true], 'checkbox must be checked'),
});

export type contactUsFormSchema = yup.InferType<typeof ContactUsFormSchema>;
