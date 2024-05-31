import React, { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  onClick: () => void;
  className?: string;
}

const Button = (props: Props) => {
  const { children, onClick, className, ...params } = props;
  return (
    <button
      className={`font-bold bg-[linear-gradient(90deg,_#F9A51A_0%,_#FD0)] py-[12px] px-5 rounded-[8px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
