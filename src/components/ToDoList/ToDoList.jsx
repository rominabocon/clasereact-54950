import React from 'react'

function ToDoList({ todos, removeOne }) {



    const todolist = todos


    return (
        <table className='min-w-full leading-normal'>
            <thead>
                <tr>
                    <th className='col-1'> User </th>
                    <th className='col-1'> Title </th>
                    <th className='col-1'> Created at </th>
                    <th className='col-1'>Status </th>
                    <th className='col-1'> </th>
                </tr>
            </thead>
            <tbody>
                {
                    todolist?.map((listita) => (
                        <tr key={listita?.id}>
                            <td>{listita?.user}</td>
                            <td>{listita?.title}</td>
                            <td>{listita?.date}</td>
                            <td>{listita?.status}</td>
                            <td><button onClick={() => removeOne(listita?.id)}>Eliminar</button></td>
                        </tr>

                    ))
                }

            </tbody>
        </table>
    )
}

export default ToDoList