import React from "react";
import { useFormContext } from "react-hook-form";

interface InputFormProps {
  name: string;
}

const InputForm: React.FC<InputFormProps> = ({ name }) => {
  const methods = useFormContext();
  const { register } = methods;
  return (
    <div>
      <input {...register(name)} />
    </div>
  );
};

export default InputForm;
