import React from 'react'

export default function Form() {
  return (
    <form>
        <label htmlFor="input-email">
          <input onChange={(e)=> setEmail(e.target.value)} value={email} type='email'/>
        </label>
        <label htmlFor="input-password">
          <input onChange={(e)=> setPassword(e.target.value)} value={password} type='password'/>
        </label>
        <button type="button">Enviar</button>
      </form>
  )
}
