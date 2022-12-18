import React from "react";
import { FormProvider, useForm } from "react-hook-form";
export interface FormInterface {
  className: string;
  children: React.ReactNode;
  onSubmit(): void;
}

const Form: React.FC<FormInterface> = ({ className, children, onSubmit }) => {
  const methods = useForm();
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
