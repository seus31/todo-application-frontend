import axios from 'axios'
import { useEffect, useState } from 'react'
import { TERipple, TESelect } from 'tw-elements-react'
import UserLayout from '../layouts/UserLayout.tsx'
import { TaskType } from '../types/TaskTypes.ts'

const Task = () => {
    const [taskName, setTaskName] = useState('')
    const [status, setStatus] = useState('not_yet_started')
    const [priority, setPriority] = useState(1)
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [page] = useState(1)
    const [limit] = useState(10)
    const statusData = [
        {text: "未着手", value: 'not_yet_started', class: 'text-secondary'},
        {text: "進行中", value: 'in_progress', class: 'text-primary'},
        {text: "完了", value: 'completed', class: 'text-success'},
    ]
    const priorityData = [
        {text: "低", value: 1, class: 'text-info'},
        {text: "中", value: 2, class: 'text-warning'},
        {text: "高", value: 3, class: 'text-danger'},
    ]

    useEffect(() => {
        getTasks().then(r => {
            console.log(r)
        })
    }, [page, limit])

    const getTasks = async () => {
        const param = {
            page: page,
            limit: limit,
        }
        const options = {
            method: 'GET',
            url: 'api/v1/tasks',
            headers: {
                'Content-Type': 'application/json',
                'X-User-Token': localStorage.getItem('token'),
            },
            params: param,
        }

        axios(options)
            .then((response: { data: any }) => {
                setTasks(response.data)
            })
            .catch((error: any) => console.error(error))
    }

    const handleSubmit = async () => {
        const param = {
            task_name: taskName,
            status: status,
            priority: priority,
        }
        const options = {
            method: 'POST',
            url: 'api/v1/tasks',
            headers: {
                'Content-Type': 'application/json',
                'X-User-Token': localStorage.getItem('token'),
            },
            data: param,
        }

        axios(options)
            .then((response: { data: any }) => {
                console.log(response.data)
                getTasks()
            })
            .catch((error: any) => console.error(error))
    }

    return (
        <>
            <UserLayout>
                <div className="p-4">
                    <h1 className="mb-5 text-2xl font-bold">Task</h1>
                    <div className="mb-3 bg-white">
                        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                            <input
                                type="text"
                                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Enter your task..."
                                aria-describedby="button-addon1"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                            />

                            <TESelect
                                data={statusData}
                                value={status}
                                onValueChange={(e: any) => {
                                    setStatus(e.value);
                                }} />
                            <TESelect
                                data={priorityData}
                                value={priority}
                                onValueChange={(e: any) => {
                                    setPriority(e.value);
                                }} />
                            <TERipple>
                                <button
                                    className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                                    type="button"
                                    id="button-addon3"
                                    onClick={handleSubmit}>
                                    Add
                                </button>
                            </TERipple>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-center text-sm font-light bg-white">
                                        <thead className="border-b font-medium bg-primary text-white">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">TaskName</th>
                                            <th scope="col" className="px-6 py-4">Status</th>
                                            <th scope="col" className="px-6 py-4">Priority</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {tasks.map((task: TaskType, index) => {
                                            const statusText = statusData.find(p => p.value === task.status)?.text || '不明'
                                            const statusClass = statusData.find(p => p.value === task.status)?.class || ''
                                            const priorityText = priorityData.find(p => p.value === task.priority)?.text || '不明'
                                            const priorityClass = priorityData.find(p => p.value === task.priority)?.class || ''
                                            return (
                                                <tr
                                                    key={index}
                                                    className="border-b border-secondary">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        {task.task_name}
                                                    </td>
                                                    <td className={`whitespace-nowrap px-6 py-4 ${statusClass}`}>{statusText}</td>
                                                    <td className={`whitespace-nowrap px-6 py-4 ${priorityClass}`}>{priorityText}</td>
                                                </tr>
                                            );
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    )
}

export default Task
