import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
  id: string,
  label: string
}

const Input = ({ label, id }: InputProps) => {
  return (
    <div className='d-flex flex-column gap-2 mb-3'>
      <label htmlFor={id}>{label}</label>
      <input id={id} />
    </div>
  )
}

export default Input