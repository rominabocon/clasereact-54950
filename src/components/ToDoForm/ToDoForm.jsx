import { useState } from "react"

// eslint-disable-next-line react/prop-types
function ToDoForm({ addToDo }) {
    const [title, setTitle] = useState('')
    const [user, setUser] = useState('')
    const [status, setStatus] = useState('')


    const fechadeHoy = new Date().toLocaleDateString()
    const onSubmit = (e) => {
        e.preventDefault()
        addToDo({ title, user, status, fechadeHoy })
        //console.log({ title, user, status })
        setTitle('');
        setUser('');
        setStatus('');
    }

    return (
        <div>
            <form
                onSubmit={onSubmit}
            >

                <input type='text' id='title' placeholder='Dar la clase'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input type='text' id='user' placeholder='usuario'
                    onChange={(e) => setUser(e.target.value)}
                />
                <select id='status'
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value=''>Select status</option>
                    <option value='pending'>Pending</option>
                    <option value='inprogress'>In Progress</option>
                    <option value='done'>Done</option>
                </select>
                <input type='submit' value='Enviar To Do' />
            </form>
        </div>
    )
}

export default ToDoForm