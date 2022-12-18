import React from "react";
import { Form } from "../../../../components/Form";
import { InputForm } from "../../../../components/InputForm";

const LoginForm: React.FC = () => {
  return (
    <div>
      <Form onSubmit={(data) => console.log(data)}>
        <InputForm name="uwu" />
        <InputForm name="raul" />
        <button type="submit"> Enviame </button>
      </Form>
    </div>
  );
};

export default LoginForm;
