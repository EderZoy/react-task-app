import { useState, useContext} from 'react'
import { TaskContext} from '../context/TaskContext';

function TaskForm() {
    const [title, setTitle] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({title, descripcion})
        //seteamos los campos en el formulario
        setTitle('') 
        setDescripcion('')
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-zinc-600 p-10 mb-4 rounded-md'>
                <h1 className='text-2xl font-bold text-white mb-3 text-center'>Agrega tu tarea</h1>
                <input type="text" placeholder="Nombre de la tarea" 
                    onChange={(e) => setTitle(e.target.value)}
                    value = {title}
                    autoFocus //el foco al cargar aparece en este input
                    className='bg-slate-300 p-3 w-full mb-2'
                />
                <textarea placeholder='Escribe la descripción de la tarea'
                    onChange={(e) => setDescripcion(e.target.value)} 
                    value = {descripcion}     
                    className='bg-slate-300 p-3 w-full mb-2'
                />
                <button className='bg-indigo-500 px-2 py-1 rounded-md mt-4 text-white hover:bg-indigo-400'>Agregar</button>
        </form>
        </div>
    )
}

export default TaskForm