import { useState, useEffect } from 'react'

function TaskForm({createTask}) {

    const [title, setTitle] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({title, descripcion})
        //seteamos los campos en el formulario
        setTitle('') 
        setDescripcion('')
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre de la tarea" 
                onChange={(e) => setTitle(e.target.value)}
                value = {title}
                autoFocus //el foco al cargar aparece en este input
            />
            <textarea placeholder='Escribe la descripción de la tarea'
                onChange={(e) => setDescripcion(e.target.value)} 
                value = {descripcion}     
            />
            <button>Agregar</button>
        </form>
  )
}

export default TaskForm