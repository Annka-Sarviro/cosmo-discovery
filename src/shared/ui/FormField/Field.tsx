import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

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
    <div className="ml-[auto] mr-[auto] relative">
      <label htmlFor="formField" className="absolute top-[-30px] left-[24px] text-base">
        {placeholder}
      </label>
      <input
        id="formField"
        className={`relative py-3 px-9 md:py-4 md:px-16 rounded-rad32 mb-16 border-2 border-transparent last:mb-0 placeholder:text-gray-600 text-darkBlue-90 bg-purple-10 max-xs:min-w-[290px] min-w-[calc(100vw_-_12rem)] md:min-w-[calc(100vw_-_35rem)] outline-[none] focus:outline-transparent focus:border-transparent max-md:text-base ${
          errors[name]
            ? 'border-purple-80 border-2 border-style:solid focus:outline-purple-80 focus:border-purple-80'
            : 'border-transparent'
        }`}
        type={type}
        {...reg(name)}
        name={name}
        placeholder={placeholder}
        aria-label={placeholder}
      />

      <div className="absolute top-[48px] md:top-[75px] left-6 text-base text-purple-30">
        {errors[name] && <p>{...Object.values(errors[name].message)}</p>}
      </div>
    </div>
  );
};

export default Field;
