/* eslint-disable react/prop-types */

export default function ToDoList({ todos, removeOne }) {

    return (
        <ul role="list" className="divide-y divide-gray-100 w-[40%] m-auto">
            {todos.map((todo) => (
                <li key={todo?.id} className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                        <img className="h-16 w-16 flex-none rounded-full bg-gray-50" src='https://i0.wp.com/edtechreviews.net/wp-content/uploads/2021/12/coderhouse_logo.png?resize=750%2C750&ssl=1' alt="Coder House" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{todo?.title}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{todo?.user}</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{todo?.status}</p>
                        <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </div>
                            <p className="text-xs leading-5 text-gray-500 ">{todo?.date}</p>
                            <button className="text-red-700" onClick={() => removeOne(todo?.id)}>X</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
