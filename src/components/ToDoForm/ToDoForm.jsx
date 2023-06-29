


import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom'



// eslint-disable-next-line react/prop-types
export default function ToDoForm({ addToDo }) {

    const [title, setTitle] = useState('')
    const [user, setUser] = useState('')
    const [status, setStatus] = useState('')
    const MySwal = withReactContent(Swal)
    const date = new Date().toLocaleDateString()
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault()
        addToDo({ title, user, status, date })

        MySwal.fire({
            title: 'Tarea Agregada con exito',
            width: 600,
            padding: '3em',
            color: '#716add',
            //  background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://media.tenor.com/xzjlrhYq_lQAAAAj/cat-nyan-cat.gif")
              left top
              no-repeat
            `
        })
        setTitle('');
        setUser('');
        setStatus('');
        navigate('/list')
    }

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">To Do Form</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Crea tu Proxima Tarea
                </p>
            </div>
            <form onSubmit={onSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">
                            Descripcion de Tarea
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"

                                name="title"
                                id="title"
                                onChange={(e) => setTitle(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="user" className="block text-sm font-semibold leading-6 text-gray-900">
                            Usuario
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="user"

                                id="user"
                                onChange={(e) => setUser(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="status" className="block text-sm font-semibold leading-6 text-gray-900">
                            Status
                        </label>
                        <div className=" mt-2.5">


                            <select

                                id="status"
                                name="status"
                                className=" w-full  rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            >
                                <option value=''>Select status</option>
                                <option value='pending'>Pending</option>
                                <option value='inprogress'>In Progress</option>
                                <option value='done'>Done</option>
                            </select>
                            <ChevronDownIcon
                                className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                aria-hidden="true"
                            />


                        </div>
                    </div>


                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Crear
                    </button>
                </div>
            </form>
        </div>
    )
}