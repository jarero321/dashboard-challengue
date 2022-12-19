import React from "react";
export interface MessageErrorInterface {
  message: string;
}

const MessageError: React.FC<MessageErrorInterface> = ({ message }) => {
  return (
    <div>
      <p className="absolute text-red-500 text-xs pt-[2px] ">{message}</p>
    </div>
  );
};

export default MessageError;
