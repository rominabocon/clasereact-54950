
import { useState } from 'react'
import './App.css'
import ToDoForm from './components/ToDoForm/ToDoForm'
import ToDoList from './components/ToDoList/ToDoList'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      title: 'Dar clase',
      user: 'Romi',
      status: 'in Progress',
      date: 'hoy'
    }
  ])
  console.log(tareas)
  const addToDo = (todo) => {
    const id = tareas.length + 1
    const newToDo = { ...todo, id }
    setTareas([...tareas, newToDo])

  }

  const removeOne = (id) => {
    const copiaArray = [...tareas];
    const filtroArray = copiaArray.filter((a) => a.id !== id)
    setTareas(filtroArray)
  }

  return (
    <>
      <h1>Hola esta es una app</h1>
      <Routes>
        <Route path='/list' element={<ToDoList todos={tareas} removeOne={removeOne} />} />
        <Route path='/form' element={<ToDoForm addToDo={addToDo} />} />
      </Routes>


    </>
  )
}

export default App
