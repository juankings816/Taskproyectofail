  import { useState } from 'react'
  import './assets/App.css'
  import { TodoAdd } from './components/TodoAdd'
  import { TodoList } from './components/TodoList'
function App() {

  return (
    <>
      <div className="card-to-do">
        <h1 className='card-to-do-title'>¡Bienvenido a tu lista de tareas!</h1>
        <div className="container-todos">
          <h2> N° tareas: 5</h2>
          <h2> Pendientes: 3</h2>
        </div>

        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <TodoAdd />
        </div>

        
      </div>
      <TodoList />

      <TodoList />  
    </>
  )
}

export default App
