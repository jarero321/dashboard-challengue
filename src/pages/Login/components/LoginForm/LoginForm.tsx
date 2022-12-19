import React from "react";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { InputForm } from "@/components/InputForm";
import useAuth from "@/hook/useAuth";

const LoginForm: React.FC = () => {
  const { signUp, loaderSignUp } = useAuth();
  return (
    <div className="w-full px-[6px] py-[12px] ">
      <Form
        className="flex flex-col gap-[28px] pt-[12px] w-full "
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
        <div className="w-full h-full lg:flex lg:items-center lg:justify-center">
          <Button
            loader={loaderSignUp}
            type="submit"
            text="Login"
            width="lg:w-[130px]"
          />
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
