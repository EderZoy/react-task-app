import React from 'react'

function TaskCard({task}) {
  return (
    <div>
        <h2>{task.title}</h2>
        <p>{task.descripcion}</p>
    </div>
  )
}

export default TaskCard