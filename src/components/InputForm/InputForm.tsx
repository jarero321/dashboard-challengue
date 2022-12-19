import React from "react";
import { useFormContext } from "react-hook-form";
import { TypeWithKey } from "../../models/type-with-key";
import { inputValidation } from "../../utils/input/inputValidations";

interface InputFormProps {
  name: string;
  placeholder?: string;
  type?: "email" | "text" | "password";
  required?: boolean;
}

const InputForm: React.FC<InputFormProps> = ({
  name,
  placeholder = "Ingrese un valor",
  type = "text",
  required = false,
}) => {
  const methods = useFormContext();
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        className="px-[12px] outline-none font-semibold text-s placeholder-[#7B7B84] py-[8px] w-full bg-bg-secondary rounded-[8px] "
        {...register(name, { required: required })}
      />
    </div>
  );
};

export default InputForm;
