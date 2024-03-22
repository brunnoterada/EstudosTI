import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
  id: string,
  label: string
}

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className='mb-3'>
      <label className='form-label' htmlFor={id}>{label}</label>
      <input className='form-control' id={id} {...props} />
      <div className='form-text'></div>
    </div>
  )
}

export default Input