import React from "react";
export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}