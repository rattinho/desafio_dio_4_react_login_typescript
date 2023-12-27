// Button.tsx
import React from "react";
import { IButtonProps } from "./types";
import { ButtonContainer } from "./styles";

const Button: React.FC<IButtonProps> = ({ title, onClick, ...rest }) => {
    const buttonProps = { onClick, ...rest }; // Manually select the props you want to pass

    return <ButtonContainer {...buttonProps}>{title}</ButtonContainer>;
};

export default Button;
