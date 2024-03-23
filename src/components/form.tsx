import React from 'react'

type FormProps = React.ComponentProps<'form'> & {
  children: React.ReactNode
}

const Form = ({ children, ...props }: FormProps) => {
  return (
    <form {...props}>{children}</form>
  )
}

export default Form