import React from "react";
import { Button } from "../../../../components/Button";
import { Form } from "../../../../components/Form";
import { InputForm } from "../../../../components/InputForm";
import useAuth from "../../../../hook/useAuth";

const LoginForm: React.FC = () => {
  const { signUp } = useAuth();
  return (
    <div className="w-full px-[6px] py-[12px] ">
      <Form
        className="flex flex-col gap-[20px] pt-[12px] w-full "
        onSubmit={(data: any) => signUp(data)}
      >
        <InputForm
          name="email"
          placeholder="Email"
          type="text"
          inputMode="email"
          required
        />
        <InputForm
          name="password"
          placeholder="Password"
          type="password"
          inputMode="text"
          required
        />
        <Button type="submit" text="Login" />
      </Form>
    </div>
  );
};

export default LoginForm;
