import React, { CSSProperties, ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  onClick: () => void;
  className?: string;
  style?: CSSProperties;
}

const Button = (props: Props) => {
  const { children, onClick, className, style, ...params } = props;
  return (
    <button
      className={`font-bold bg-[linear-gradient(90deg,_#F9A51A_0%,_#FD0)] py-[12px] px-5 rounded-[8px] text-[#333] ${className}`}
      onClick={onClick}
      style={{ ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
