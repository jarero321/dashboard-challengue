import React from "react";
import { useFormContext } from "react-hook-form";

interface InputFormProps {
  name: string;
}

const Input = React.memo<InputFormProps>(
  ({ name }) => (
    <div>
      <input />
    </div>
  ),
  (prevProps, nextProps) =>
    prevProps.formState.isDirty === nextProps.formState.isDirty
);

const InputForm = () => {
  const methods = useFormContext();
  return (
    <div>
      <Input {...methods} />
    </div>
  );
};
