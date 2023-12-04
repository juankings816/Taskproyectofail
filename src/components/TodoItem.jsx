import React from 'react'
import { TbTrashXFilled } from "react-icons/tb";


export const TodoItem = () => {
  return (
    <li>
        <span>
            <label htmlFor="" className='container'></label>
        </span>
        <button className='btn-trash'>Borrar<TbTrashX/>
 </button>
    </li>
  )
}
