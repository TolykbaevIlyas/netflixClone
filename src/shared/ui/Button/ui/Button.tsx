import React from 'react'

interface IButton{
    onClick?: ()=> void;
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
    children?: React.ReactNode
}

const Button = ({onClick,type,className,children}:IButton) => {
  return (
    <button type={type} onClick={onClick} className={className}>
        {children}
    </button>
  )
}

export default Button