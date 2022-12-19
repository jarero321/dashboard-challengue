import React from "react";
import LogoPayCode from "@/assets/logo-paycode.png";
import { LoginForm } from "@/pages/Login/components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="bg-bg-default w-screen h-screen flex items-center justify-center">
      <div className="w-[90%] lg:w-[400px] lg:h-[350px] lg:flex lg:justify-center px-[24px] py-[24px] rounded-[8px] shadow-md bg-white flex flex-col items-center">
        <img width={150} src={LogoPayCode} />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
