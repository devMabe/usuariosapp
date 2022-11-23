import React from 'react'

export const ButtonGreetings = ({ users }) => {
  const saludar = () =>{
    alert(`Hola  ${users}`);
  }

  return (
    <>
    <button  className="btn btn-outline-primary" onClick={saludar}>Saludar</button>
    </>
  )
}
