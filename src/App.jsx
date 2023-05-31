
import React from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

import {useState, useEffect } from 'react'
import {tasks as data} from './data/task.js'

function App() {

  //TRAEMOS EL ARREGLO DE TAREAS AL COMPONENTE PRINCIPAL PARA PASARSELO (COMO UN PROPS) A LOS DEMAS COMPONENTES
  //Hacemos uso de useState y useEffect para mostrar las tareas

  const [tasks,setTasks] = useState([]) //inicia con un array vacio

  useEffect(() => {
    setTasks(data) //setea el arreglo de tareas. 
  }, []) //array vacio para que se ejecute una vez


  function createTask(task) {
    //esta funcion añade la tarea en la lista de tareas, usamos la sintaxis [...,]
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length, //el id sera el largo del array tareas
      descripcion: task.descripcion}
    ]) //setea el nuevo arreglo con el objeto
  }

  return (
    <>
      <TaskForm createTask={createTask}></TaskForm>
      <TaskList tasks={tasks}></TaskList>
    </>
  )
}

export default App