import React from "react";
import { IconBaseProps } from "react-icons";

interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  icon?: React.ElementType<IconBaseProps>;
  onClick: () => void;
}

const Button = ({ text, type, icon: Icon }: ButtonProps) => {
  return (
    <div>
      <button type={type}>
        {text}
        {Icon && (
          <span>
            <Icon size={20} />
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
