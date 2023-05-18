import { PropsWithChildren, FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from '@/shared/ui/Button/Button';
import { ContactUsFormSchema, contactUsFormSchema } from '../model/ContactUsFormSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import Checkbox from '@/shared/ui/Checkbox/Checkbox';

interface ContsctFormProps {
  className?: string;
  onComplete?: () => void;
}

const ContactUsForm: FC<PropsWithChildren<ContsctFormProps>> = props => {
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
  });

  //  const onSubmitHandler = useCallback(({ email, password }: LoginFormSchema) => {
  //     dispatch(loginThunk({ email, password }))
  //       .unwrap()
  //       .then(() => props.onComplete?.())
  //       .catch(error => {
  //         setError('email', { type: 'server', message: error.message });
  //       });
  //   }, []);

  const onSubmitHandler = (data: contactUsFormSchema) => {
    reset();
    alert('saend');
    // console.log(data);
  };
  return (
    <div className={props.className}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <input
            className="py-4 px-16 rounded-rad32 mb-10 last:mb-0 placeholder:text-gray-600 text-darkBlue-90 bg-purple-10 min-w-[610px] focus:outline-transparent focus:border-transparent"
            type="text"
            {...register('name')}
            // aria-invalid={errors.name ? 'true' : 'false'}
            placeholder="enter your name*"
          />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <input
            className="py-4 px-16 rounded-rad32 mb-10 last:mb-0 placeholder:text-gray-600 text-darkBlue-90 bg-purple-10 min-w-[610px] focus:outline-transparent focus:border-transparent"
            type="phone"
            {...register('phone')}
            placeholder="enter your phone*"
          />
          <p>{errors.phone?.message}</p>
        </div>
        <div>
          <input
            className="py-4 px-16 rounded-rad32 mb-10 last:mb-0 placeholder:text-gray-600 text-darkBlue-90 bg-purple-10 min-w-[610px] focus:outline-transparent focus:border-transparent"
            type="email"
            {...register('email')}
            placeholder="enter your email*"
          />
          <p className="text-xs">{errors.email?.message}</p>
        </div>
        {/* <Controller
          name="checkbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              onChange={e => field.onChange(e.target.checked)}
              name={field.name}
            />
          )}
        /> */}
        <Button className="block mx-auto mt-4" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUsForm;
