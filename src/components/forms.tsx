'use client'
import React, { ChangeEvent, FormEvent } from 'react'
import Form from './form'
import Input from './input'
import Button from './button'

const Forms = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')


  //get values 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'name') {
      setName(e.target.value)
    }
    if (e.target.id === 'email') {
      setEmail(e.target.value)
    }
  }

  //submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (name === '' || email === '') {
      alert('Existem campos vazios')
      return;
    }
    setEmail('')
    setName('')
    alert('Formulário enviado com sucesso')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input label="Nome" id="name" type="text" value={name} onChange={handleChange} />
      <Input label="Email" id="email" type="email" value={email} onChange={handleChange} />
      <Button text="Enviar" type="submit" />
    </Form>
  )
}

export default Forms