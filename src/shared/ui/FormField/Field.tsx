import { FC } from 'react';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';
import { ContactUsFormSchema } from '@/features/ContactUsForm/model/ContactUsFormSchema';

interface FieldProps {
  data: {
    name: string;
    type: string;
    placeholder: string;
  };
  reg: UseFormRegister<any>;
  errors?: any;
}

const Field: FC<FieldProps> = ({ data, reg, errors }) => {
  const { type, name, placeholder } = data;

  return (
    <div className="relative">
      <input
        className="relative py-4 px-16 rounded-rad32 mb-10 last:mb-0 placeholder:text-gray-600 text-darkBlue-90 bg-purple-10 min-w-[610px] focus:outline-transparent focus:border-transparent"
        type={type}
        {...reg(name)}
        name={name}
        placeholder={placeholder}
      />
      <div className="absolute top-[75px] left-6 text-base text-purple-30">
        {errors[name] && <p>{Object.values(errors[name].message)}</p>}
      </div>
    </div>
  );
};

export default Field;
