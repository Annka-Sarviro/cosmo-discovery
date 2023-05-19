import toast, { Toaster } from 'react-hot-toast';
import { PropsWithChildren, FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import formField from '../api/formFields';
import Field from '@/shared/ui/FormField/Field';
import Button from '@/shared/ui/Button/Button';
import { ContactUsFormSchema, contactUsFormSchema } from '../model/ContactUsFormSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import Checkbox from '@/shared/ui/Checkbox/Checkbox';

interface ContsctFormProps {
  className?: string;
  onComplete?: () => void;
}

const notify = () =>
  toast.success('Thank you for your interest, your message has been sent.', {
    duration: 4000,
    position: 'top-center',
  });

const ContactUsForm: FC<PropsWithChildren<ContsctFormProps>> = props => {
  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
    control,
    reset,
  } = useForm<contactUsFormSchema>({
    defaultValues: {
      checkbox: false,
    },
    resolver: yupResolver(ContactUsFormSchema),
    mode: 'onBlur',
  });

  const onSubmitHandler = (data: contactUsFormSchema) => {
    notify();
    reset();

    console.log(data);
  };

  return (
    <div className={props.className}>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col">
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
