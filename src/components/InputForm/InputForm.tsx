import React from "react";
import { useFormContext } from "react-hook-form";
import { inputValidation } from "../../utils/input/inputValidations";
import { MessageError } from "../MessageError";

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

  const isError = (errors: any): boolean => {
    return Boolean(errors && errors[name]);
  };
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={`px-[12px] outline-none font-semibold text-s placeholder-[#7B7B84] py-[8px] border w-full bg-bg-secondary rounded-[8px] ${
          isError(errors) ? "border border-red-500" : ""
        } `}
        {...register(name, inputValidation(type, required))}
        formNoValidate
      />
      {isError(errors) && (
        <MessageError message={errors[name]?.message as string} />
      )}
    </div>
  );
};

export default InputForm;
