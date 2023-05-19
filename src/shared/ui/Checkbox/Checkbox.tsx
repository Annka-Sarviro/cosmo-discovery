import { ChangeEvent } from 'react';
import { FieldErrors } from 'react-hook-form';

interface CheckboxProps {
  checked: boolean | undefined;
  onChange: (checked: boolean) => void;
  name: string;
  errors?: FieldErrors<{ checkbox?: string }>;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, name, errors }) => {
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className="relative">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          name={name}
          className="w-6 h-6 mb-10"
        />
        <span> Click in the box &quot;I agree to the terms and conditions&quot;.</span>
        <div className="absolute top-8 left-6 text-base text-purple-30">
          {errors?.checkbox && <p>{errors?.checkbox?.message}</p>}
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
