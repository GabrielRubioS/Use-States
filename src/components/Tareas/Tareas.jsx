import React, { useState } from 'react';
import './Tareas.css'

export const Tareas = () => {
  const [inputTask, setInputTask] = useState('');
  const [description, setDescription] = useState('');
  const [tareas, setTareas] = useState([]);

  const handleTask = () => {
    if (inputTask && description) {
      
      const nuevaTarea = { nombre: inputTask, descripcion: description };
      setTareas([...tareas, nuevaTarea]);

      setInputTask('');
      setDescription('');
    }
  };

  return (
    <>
    <div className='Todo'>
      <h2 className='titulos'>Creador de tareas</h2>
      <input
        placeholder="Nombre Tarea"
        type="text"
        value={inputTask}
        onChange={(event) => setInputTask(event.target.value)}
        className='Descripciones'
      />

        <textarea  
        placeholder="Descripción Tarea"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className='Descripciones'>
        </textarea>

      <button className='Descripciones' onClick={handleTask}>Crear Tarea</button>
      

      <ul className='EstiloUl'>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <strong>{tarea.nombre}</strong> - {tarea.descripcion}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};






