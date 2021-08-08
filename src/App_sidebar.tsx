import React, { useState } from 'react'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import { Task } from './Types';
import './App.css';

const initialState: Task[] = [
    {
        id: 2,
        title: '次にやるやつ',
        done: false
    },
    {
        id: 1,
        title: '初めにやるやつ',
        done: true
    }
]

const App: React.FC = () => {
    const [tasks, setTasks] = useState(initialState)

    return (
        <div className="sidebar-layout">
            <div>
                <TaskInput setTasks={setTasks} tasks={tasks} />
            </div>
            <div>
                <TaskList setTasks={setTasks} tasks={tasks} />
            </div>
        </div>
    )
}

export default App