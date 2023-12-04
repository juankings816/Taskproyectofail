import React from 'react'

export const TodoAdd = () => {
  return <form>
    <input type='text' 
    className='input-add' 
    name='description' 
    value="Aprender react" 
    placeholder='Agrega tu tarea!'>
    </input>

    <button className="btn-add" type='submit'>Agregar</button>
  </form> 
};
