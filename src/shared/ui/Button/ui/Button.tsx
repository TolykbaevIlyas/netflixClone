import React from 'react'

interface IButton{
    onClick?: ()=> void;
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
    children?: React.ReactNode
}

const Button = ({onClick,type,className,children}:IButton) => {
  return (
    <button type={type} onClick={onClick} className={`${className} px-5 bg-orange-400/70 rounded-lg hover:bg-orange-400`}>
        {children}
    </button>
  )
}

export default Button