import React from "react";
import LogoPayCode from "../../assets/logo-paycode.png";
import { LoginForm } from "./components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="bg-bg-default w-screen h-screen flex items-center justify-center">
      <div className="w-[90%] px-[24px] py-[24px] rounded-[8px] shadow-md bg-white flex flex-col items-center">
        <img width={150} src={LogoPayCode} />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
