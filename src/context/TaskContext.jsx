import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../data/task.js'

export const TaskContext = createContext()


export function TaskContextProvider (props) {

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
    
    function deleteTask(taskId) {
        //Del arreglo usamos un filter y por cada tarea compara el id pasado. 
        setTasks(tasks.filter( task => task.id !== taskId))
    }
    
    return (
        <TaskContext.Provider value={{
            tasks, 
            deleteTask,
            createTask
        }}> {props.children} </TaskContext.Provider>
  )
}

