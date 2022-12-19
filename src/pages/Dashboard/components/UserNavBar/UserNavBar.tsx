import React from "react";
import useDashboard from "@/pages/Dashboard/hook/useDashboard";
import useAuth from "@/hook/useAuth";
import { Button } from "@/components/Button";
export interface UserNavBarInterface {}

const UserNavBar: React.FC<UserNavBarInterface> = () => {
  const { getUserName } = useDashboard();
  const { logOut } = useAuth();
  return (
    <div className="flex items-center justify-between">
      <p className="text-black font-bold text-lg lg:text-3xl ">
        Bienvenido {getUserName()}
      </p>
      <Button
        text="LogOut"
        variant="secondary"
        width="w-[100px]"
        onClick={logOut}
        type="button"
      />
    </div>
  );
};

export default UserNavBar;
