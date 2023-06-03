
import React from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import {useState} from 'react'

function App() {

  //TRAEMOS EL ARREGLO DE TAREAS AL COMPONENTE PRINCIPAL PARA PASARSELO (COMO UN PROPS) A LOS DEMAS COMPONENTES
  //AVANZADO EN EL PROYECTO SE PASO EL ARREGLO DE TAREAS A CONTEXT PARA QUE TODOS PUEDAN ACCEDER
  //Hacemos uso de useState y useEffect para mostrar las tareas

  const [tasks,setTasks] = useState([]) //inicia con un array vacio

  return (
    <div className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
          <TaskForm ></TaskForm>  
          <TaskList ></TaskList>
      </div>
    
    </div>
  )
}

export default App