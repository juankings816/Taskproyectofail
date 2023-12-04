import React from 'react'
import { FaRegEdit } from "react-icons/fa";

export const TodoUpdate = () => {
    return <form>
    <input type='text' 
    className='input-update' 
    name='description' 
    value="Aprender react" 
    placeholder='Agrega tu tarea!'>
    </input>

    <button className="btn-add" type='edit'><FaRegEdit /></button>
  </form> 
}
