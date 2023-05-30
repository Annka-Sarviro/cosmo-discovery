import { PropsWithChildren, FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';

import formField from '../api/formFields';
import Field from '@/shared/ui/FormField/Field';
import Button from '@/shared/ui/Button/Button';
import { ContactUsFormSchema, contactUsFormSchema } from '../model/ContactUsFormSchema';
import Checkbox from '@/shared/ui/Checkbox/Checkbox';
import ContactFormProps from '../model/ContactFormProps';
import axios from 'axios';

const notify = () =>
  toast.success('Thank you for your interest, your message has been sent.', {
    duration: 4000,
    position: 'top-center',
  });

const ContactUsForm: FC<PropsWithChildren<ContactFormProps>> = props => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
    reset,
  } = useForm<contactUsFormSchema>({
    defaultValues: {
      checkbox: false,
    },
    resolver: yupResolver(ContactUsFormSchema),
    mode: 'all',
  });

  const onSubmitHandler = (data: contactUsFormSchema) => {
    const TOKEN = '5921706384:AAE8BqSi4TTNxh8yEp7nEOhBvIv4ejYBjVQ';
    const CHAT_ID = '-1001866687565';
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    let message = `
      <b> You mess: ${data.firstname}</b>
    `;
    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    });
    reset();
    console.log(data);
  };

  return (
    <div className={props.className}>
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col"
        aria-label="Contact us"
      >
        {formField.map((el, ind) => (
          <Field key={ind} data={el} reg={register} errors={errors} />
        ))}
        <Controller
          name="checkbox"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, name } }) => (
            <Checkbox checked={value} onChange={e => onChange(e)} name={name} errors={errors} />
          )}
        />
        <Button className="block mx-auto mt-4" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUsForm;
