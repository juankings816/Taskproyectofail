import React from 'react'
import { TbTrashXFilled } from "react-icons/tb";
import { TodoUpdate } from './TodoUpdate';
export const TodoItem = () => {
  return (
    <li>
        <span>
            <label htmlFor="" className='container-done'></label>
        </span>
        <TodoUpdate/>
        <button className='btn-trash'><TbTrashXFilled />Borrar</button>
    </li>
  )
}
