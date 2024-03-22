import React from 'react'

type ButtonProps = React.ComponentProps<'button'> & {
  text: string
  type: string
}

const Button = ({ text, type, ...props }: ButtonProps) => {
  return (
    <button className='btn btn-primary' type={type} {...props}>{text}</button>
  )
}

export default Button