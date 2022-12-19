import React from "react";
import { Form } from "../../../../components/Form";
import { InputForm } from "../../../../components/InputForm";

const LoginForm: React.FC = () => {
  return (
    <div className="w-full px-[6px] ">
      <Form
        className="flex flex-col gap-[14px] pt-[12px] w-full"
        onSubmit={(data) => console.log(data)}
      >
        <InputForm name="email" placeholder="Email" />
        <InputForm name="password" placeholder="Password" />
        <button type="submit"> Enviame </button>
      </Form>
    </div>
  );
};

export default LoginForm;
